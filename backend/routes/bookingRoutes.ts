// backend/routes/bookingRoutes.ts
import express from 'express';
import { createBooking, getBookings, getBookingById, deleteBooking, updateBooking } from '../controllers/bookingController';
import { clientAuth, adminAuth, attendantAuth } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', clientAuth, createBooking);
router.get('/', adminAuth, getBookings);
router.get('/:id', clientAuth, getBookingById);
router.put('/:id', clientAuth, updateBooking);
router.delete('/:id', adminAuth, deleteBooking);

export default router;

