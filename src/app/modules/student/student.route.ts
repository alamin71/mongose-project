import express from 'express';
import { StudentControllers } from './controller';
const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
export const StudentRoutes = router;
