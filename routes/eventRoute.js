import express from 'express';
import { getEvents, getEventById, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';
import authMiddleware from '../middleware/auth.js';
const eventRoute = express.Router();

eventRoute.post('/createEvent', authMiddleware,createEvent);
eventRoute.get('/listEvents', authMiddleware,getEvents);
//work
eventRoute.get('/listEvent/id', authMiddleware,getEventById);
eventRoute.put('/updateEvent', authMiddleware,updateEvent);
eventRoute.delete('/deleteEvent', authMiddleware,deleteEvent);

export default eventRoute;