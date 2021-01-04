const { Schema, model } = require('mongoose');

const userSchema = Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = model('user', userSchema);
