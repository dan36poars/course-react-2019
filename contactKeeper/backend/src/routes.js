const express = require('express');

// import routes
const auth = require('./routes/auth');
const contacts = require('./routes/contacts');
const users = require('./routes/users');

const routes = express.Router();

// define routes
routes.use('/api/users', users);
routes.use('/api/auth', auth);
routes.use('/api/contacts', contacts);

module.exports = routes;