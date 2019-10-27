const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

module.exports = {
  async store(req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {

      const contact = await Contact.create({
        name, email, phone, type, user: req.user.id
      });

      return res.json(contact);
      
    } catch(e) {
      console.error(e.message);
      return res.status(500).json({msg: "Server Error"})
    }

    return res.json({ msg: true });
  },
  async index(req, res) {
    try {
      const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
      return res.json(contacts);

    } catch(e) {
      // statements
      console.error(e.message);
      return res.status(500).json({ msg: "Server Error." })
    }
  }
}