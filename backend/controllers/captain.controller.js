const captainmodel = require('../models/captain.model');
const {validationResult} = require('express-validator');
const BlacklistToken = require('../models/blacklistToken.model');
const captainservice = require('../services/captain.service');


// route to validate and register the captain
module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname, email, password, status, vehicle} = req.body;

    const isCaptainExists = await captainmodel.findOne({email})
    
    if(isCaptainExists){
        return res.status(400).json({message: 'Cpatain already exists'})
    }
    
    const iscaptainExists = await captainmodel.findOne({email});
    if(iscaptainExists){
        return res.status(400).json({message: 'Captain already exists'});
    }

    const hashedPassword = await captainmodel.hashPassword(password);

    const captain = await captainservice.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        status,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    });
    const token = captain.generateToken();
    res.cookie('token', token);

    res.status(201).json({message: 'Captain registered successfully', captain, token});
}


// handling any error and logging in the captain
module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {email, password} = req.body

    const captain = await captainmodel.findOne({email}).select('+password')

    if(!captain){
        return res.status(401).json({message:'Invalid Email or Password' })
    }

    const isMatch = await captain.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({message: 'Invalid Email or Password'})
    }
    const token = captain.generateToken()
    res.cookie('token', token)

    res.status(200).json({message: 'Captain logged in successfully', captain, token})
}


// get captain profile details
module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}


// logout captain and blacklist the token
module.exports.logoutCaptain = async (req, res, next) => {
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await BlacklistToken.create({token})
    res.status(200).json({message: 'Captain logged out successfully'})
}