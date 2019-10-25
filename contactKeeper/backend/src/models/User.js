const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password_hash: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }

});

module.exports = model('User', UserSchema);