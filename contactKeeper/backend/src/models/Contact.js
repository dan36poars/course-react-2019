const { model, Schema } = require('mongoose');

const ContactSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref : 'users',
    required: true
	},
	name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
  	type: String,
  	default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now()
  }

});

module.exports = model('Contact', ContactSchema);