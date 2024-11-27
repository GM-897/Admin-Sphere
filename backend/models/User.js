// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
});

module.exports = mongoose.model('User', UserSchema);


//MZPnz2rZQ0EK4HzW
