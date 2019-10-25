const Contact = require('../models/Contact');

module.exports = {
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