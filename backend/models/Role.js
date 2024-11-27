// models/Role.js
const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  permissions: {
    type: [String],
    default: [], 
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.every((perm) => typeof perm === 'string');
      },
      message: 'Permissions must be an array of strings.',
    },
  },
});

module.exports = mongoose.model('Role', RoleSchema);



// // models/Role.js
// const mongoose = require('mongoose');

// const RoleSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   permissions: [String], // e.g., ['Read', 'Write', 'Delete']
// });

// module.exports = mongoose.model('Role', RoleSchema);


