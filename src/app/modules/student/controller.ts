import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  // console.log('from controller', req.body);
  const { student: studentData } = req.body;
  try {
    // console.log('from controller', studentData);
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StudentControllers = {
  createStudent,
};
