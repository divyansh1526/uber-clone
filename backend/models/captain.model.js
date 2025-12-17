const monggose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const captainschema = new monggose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastname: {
      type: String,
      minlength: [3, 'Last name must be at least 3 characters long'],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [5, 'Email must be at least 5 characters long'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  vehicle: {
    color : {
      type: String,
      required: true,
    },
    plate : {
      type: String,
      required: true,
      minlength: [3, 'Plate number must be at least 3 characters long'],
    },
    capacity : {
      type: Number,
      required: true,
      min: [1, 'Capacity must be at least 1'],
    },
    vehicleType : {
      type: String,
      required: true,
      enum: ['auto', 'car', 'motorcycle'],
    },
  },
  location : {
    lattitude : {
      type: Number,
    },
    longitude : {
      type: Number,
    },
  }
});

// to generate captain login token
captainschema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
};

// to comapre captain password during login
captainschema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// to hash (secure) the captain provided password
captainschema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainmodel = mongoose.model('captains', captainschema);

module.exports = captainmodel;
