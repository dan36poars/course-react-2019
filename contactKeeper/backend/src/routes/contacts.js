const express = require('express');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// controller
const ContactController = require('../controllers/ContactController');

const route = express.Router();

// @route    GET api/contacts
// @desc     Get all users contacts
// @access   Private
route.get('/', auth, ContactController.index );

// @route    POST api/contacts
// @desc     Add new contact
// @access   Private
route.post('/', [auth,[
	check('name', 'Name is Required').not().isEmpty(),
	check('email', 'Email is Required').isEmail(),
	check('phone', 'Phone is Required with 11 digits').isLength({	max: 11, min: 11 })
	]], ContactController.store );

// @route    PUT api/contacts/:id
// @desc     Update a contact
// @access   Private
route.put('/:id', auth, (req, res) => {
  res.json({ msg: "Update a contact." });
});

// @route    DELETE api/contacts/:id
// @desc     Delete contact
// @access   Private
route.delete('/:id', (req, res) => {
  res.json({ msg: "Delete contact." });
});

module.exports = route;
