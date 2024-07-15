import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  // console.log('from service', student);
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
