const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captaincontroller = require('../controllers/captain.controller');
const authmiddleware = require('../middlewares/auth.middleware');


// validating the incoming data from captain
router.post('/register',
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate number must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid vehicle type'),
    captaincontroller.registerCaptain
);


// login route for captain
router.post('/login',
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    captaincontroller.loginCaptain
)


// captain profile route
router.get('/profile', authmiddleware.authCaptain, captaincontroller.getCaptainProfile)


// captain logout route
router.get('/logout', authmiddleware.authCaptain, captaincontroller.logoutCaptain)


module.exports = router;