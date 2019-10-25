const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check  } = require('express-validator');

// controller
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

const route = express.Router();

// @route    GET api/auth
// @desc     Get logged user
// @access   Private
route.get('/', auth, AuthController.show );

// @route    POST api/auth
// @desc     Auth user & get Token
// @access   Public
route.post('/', [
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists()
	] , UserController.show );

module.exports = route;