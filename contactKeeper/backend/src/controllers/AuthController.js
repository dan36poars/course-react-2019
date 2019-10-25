const User = require('../models/User');

module.exports = {
	async show(req, res) {
		try {
			const user = await User.findById(req.user.id).select('-password_hash');
			return res.json(user);

		} catch(e) {
			// statements
			console.error(e.message);
			return res.status(500).json({ msg: "Server Error." })
		}
	}
}