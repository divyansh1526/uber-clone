const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
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
    minlength: [5, 'Email must be at least 5 characters long'],
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
});

// to generate user login token
userschema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
};

// to comapre user password during login
userschema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// to hash (secure) the user provided password
userschema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const usermodel = mongoose.model('users', userschema);

module.exports = usermodel;
