const usermodel = require('../models/user.model')
const {validationResult} = require('express-validator')
const userservice = require('../services/user.service')
const BlacklistToken = require('../models/blacklistToken.model')


// handling any error and registering the user
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    
    const {fullname, email, password} =  req.body

    const isUserExists = await usermodel.findOne({email})

    if(isUserExists){
        return res.status(400).json({message: 'User already exists'})
    }


    const hashedPassword = await usermodel.hashPassword(password)

    const user = await userservice.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    const token = user.generateToken()

    res.status(201).json({message: 'User registered successfully', user, token})
}


// handling any error and logging in the user
module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {email, password} = req.body

    const user = await usermodel.findOne({email}).select('+password')

    if(!user){
        return res.status(401).json({message:'Invalid Email or Password' })
    }
    const isMatch = await user.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({message: 'Invalid Email or Password'})
    }
    const token = user.generateToken()
    res.cookie('token', token)

    res.status(200).json({message: 'User logged in successfully', user, token})
}


// get user profile details
module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}


// logout user and blacklist the token
module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await BlacklistToken.create({token})
    res.status(200).json({message: 'User logged out successfully'})
}