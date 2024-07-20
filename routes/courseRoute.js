import express from  'express';
import { createCourse, deleteCourse,getAllCourses, getCourseById,updateCourse } from '../controllers/courseController.js';

const courseRoute = express.Router();

courseRoute.post('/createCourse', createCourse);
courseRoute.get('/getCourses', getAllCourses);
courseRoute.get('/getCourseById/:id', getCourseById);
courseRoute.put('/updateCourse/:id', updateCourse);
courseRoute.delete('/deleteCourse/:id', deleteCourse);


export default courseRoute;