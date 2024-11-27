const express = require('express');
const Role = require('../models/Role');
const router = express.Router();

// Get all roles
router.get("/", async (req, res) => {
  try {
    const roles = await Role.find(); // Fetch all roles
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a role's permissions
router.put('/:id', async (req, res) => {
  const { permissions } = req.body;

  if (!Array.isArray(permissions)) {
    return res.status(400).json({ error: 'Permissions must be an array of strings.' });
  }

  try {
    const updatedRole = await Role.findByIdAndUpdate(
      req.params.id,
      { permissions },
      { new: true, runValidators: true }
    );

    if (!updatedRole) {
      return res.status(404).json({ error: 'Role not found.' });
    }

    res.json(updatedRole);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a role
router.delete('/:id', async (req, res) => {
  try {
    const deletedRole = await Role.findByIdAndDelete(req.params.id);

    if (!deletedRole) {
      return res.status(404).json({ error: 'Role not found.' });
    }

    res.json({ message: 'Role deleted.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
