// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  role: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
});

module.exports = mongoose.model('User', UserSchema);

// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   role: { type: String, required: true }, // Change from ObjectId to String
//   designation: { type: String },
//   status: { type: String },
// });

// module.exports = mongoose.model('User', UserSchema);

