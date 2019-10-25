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
route.post('/', (req, res) => {
  res.json({ msg: "Add new contact." });
});

// @route    PUT api/contacts/:id
// @desc     Update a contact
// @access   Private
route.put('/:id', (req, res) => {
  res.json({ msg: "Update a contact." });
});

// @route    DELETE api/contacts/:id
// @desc     Delete contact
// @access   Private
route.delete('/:id', (req, res) => {
  res.json({ msg: "Delete contact." });
});

module.exports = route;
