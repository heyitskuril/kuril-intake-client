// Intake Routes
// Kenapa dipisah? Supaya routing logic terpisah dari business logic

const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middleware');
const {
  submitIntake,
  getAllIntakes,
  getIntakeById,
  updateIntakeStatus,
  deleteIntake,
} = require('../controllers/intake.controller');

// PUBLIC ROUTES
router.post('/', submitIntake);

// PROTECTED ROUTES (Admin only)
router.get('/', protect, getAllIntakes);
router.get('/:id', protect, getIntakeById);
router.patch('/:id/status', protect, updateIntakeStatus);
router.delete('/:id', protect, deleteIntake);

module.exports = router;