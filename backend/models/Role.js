// models/Role.js
const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: [String], // e.g., ['Read', 'Write', 'Delete']
});

module.exports = mongoose.model('Role', RoleSchema);
