// backend/routes/authRoutes.ts
import express from 'express';
import { loginUser, registerAdmin, registerAttendant, registerClient } from '../services/authService';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register/admin', registerAdmin);
router.post('/register/attendant', registerAttendant);
router.post('/register/client', registerClient);

export default router;
