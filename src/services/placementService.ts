import Student from '../models/Student';

export const submitPlacementRequest = async (studentData: any) => {
  const student = new Student(studentData);
  await student.save();
  return student;
};