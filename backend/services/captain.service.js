const captainmodel = require('../models/captain.model');

// service to create a new captain
module.exports.createCaptain = async ({firstname, lastname, email, password, status, color, plate, capacity, vehicleType}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required')
    }
    const captain = captainmodel.create({fullname: {firstname, lastname}, email, password, status, vehicle: {color, plate, capacity, vehicleType}})
    return captain
}