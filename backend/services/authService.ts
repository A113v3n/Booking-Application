import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import Admin from '../models/Admin';
import Attendant from '../models/Attendant';
import Client from '../models/Client';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const generateToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, JWT_SECRET, { expiresIn: '1h' });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let user;
    let role: string | undefined;
    user = await Admin.findOne({ email });
    if (user) {
      role = 'admin';
    } else {
      user = await Attendant.findOne({ email });
      if (user) {
        role = 'attendant';
      } else {
        user = await Client.findOne({ email });
        if (user) {
          role = 'client';
        }
      }
    }

    if (!user || !role) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id.toString(), role);
    res.status(200).json({ token, role });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Admin Registration
export const registerAdmin = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newAdmin = new Admin({ firstName, lastName, email, password: hashedPassword, role: 'admin' });
    await newAdmin.save();

    const token = generateToken(newAdmin._id.toString(), newAdmin.role);
    res.status(201).json({ result: newAdmin, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Attendant Registration
export const registerAttendant = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, phoneNumber, bio, location } = req.body;

  if (!email || !password || !firstName || !lastName || !phoneNumber || !bio || !location) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingAttendant = await Attendant.findOne({ email });
    if (existingAttendant) return res.status(400).json({ message: 'Attendant already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newAttendant = new Attendant({ firstName, lastName, email, password: hashedPassword, phoneNumber, bio, location, role: 'attendant' });
    await newAttendant.save();

    const token = generateToken(newAttendant._id.toString(), newAttendant.role);
    res.status(201).json({ result: newAttendant, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Client Registration
export const registerClient = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, phoneNumber, pregnant, pressurePreference, painArea } = req.body;

  console.log('Received registration data:', req.body); // Log the incoming request data

  if (!firstName || !lastName || !email || !password || !phoneNumber || !pregnant || !pressurePreference || !painArea) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingClient = await Client.findOne({ email });
    if (existingClient) return res.status(400).json({ message: 'Client already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newClient = new Client({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      pregnant,
      pressurePreference,
      painArea,
      role: 'client',
    });
    await newClient.save();

    const token = generateToken(newClient._id.toString(), newClient.role);
    res.status(201).json({ result: newClient, token });
  } catch (error) {
    console.error('Error during client registration:', error); // Log detailed error
    res.status(500).json({ message: 'Something went wrong' });
  }
};