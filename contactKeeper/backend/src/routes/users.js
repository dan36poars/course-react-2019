const express = require('express');
const { check } = require('express-validator');

// Controller
const UserController = require('../controllers/UserController'); 

const route = express.Router();

// @route    POST api/users
// @desc     Register a user
// @access   Public
route.post('/', [ 
	check('name', 'Please Added Name')
		.not()
		.isEmpty(),
	check('email', 'Please include a valid email')
		.isEmail(),
	check('password', 'Please enter a password with 6 untill 12 characters')
		.isLength({ min: 6, max: 12 })
	] 
	, UserController.store );

module.exports = route;