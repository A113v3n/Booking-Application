import express from 'express';
import { registerAttendant, loginUser  } from '../services/authService';
import { getAttendants, getAttendantById, deleteAttendant, getAttendantDashboard } from '../controllers/attendantController';
import { attendantAuth } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/dashboard', attendantAuth, getAttendantDashboard); // Ensure this is above any route with a dynamic parameter

router.post('/register', registerAttendant);

router.get('/', attendantAuth, getAttendants);
router.get('/:id', attendantAuth, getAttendantById);
router.delete('/:id', attendantAuth, deleteAttendant);

export default router;
