const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const usercontroller = require('../controllers/user.controller')
const authmiddleware = require('../middlewares/auth.middleware')


// validating the incoming data from user
router.post('/register',
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    usercontroller.registerUser
)


// login route for user
router.post('/login',
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    usercontroller.loginUser
)


// user profile route
router.get('/profile', authmiddleware.authUser, usercontroller.getUserProfile)


// user logout route
router.get('/logout', authmiddleware.authUser, usercontroller.logoutUser)

module.exports = router