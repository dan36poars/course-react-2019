const User = require('./../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult  } = require('express-validator');

module.exports = {
  async store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {

      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists.' });
      }

      user = new User({
        name,
        email,
        password_hash: password
      });

      const salt = await bcrypt.genSalt(10);

      user.password_hash = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000 
      }, (err, token) => {
        if (err) throw err;
        return res.json({token: token});
      });

    } catch(e) {
      // statements
      console.error(e.message);
      return res.status(500).json({ msg: 'Server Error.' });
    }    
  },

  async show(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {

      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials." });
      }

      const isMatch = await bcrypt.compare( password, user.password_hash );

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials."});
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000 
      }, (err, token) => {
        if (err) throw err;
        return res.json({token: token});
      });

    } catch(e) {
      console.error(e.message);
      return res.status(400).json({ msg: "Server Error." });
    }

  }


};