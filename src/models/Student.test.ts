import Student from './Student';

describe('Student Model', () => {
  it('should create a new student', async () => {
    const studentData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      placementStatus: 'pending',
    };

    const student = new Student(studentData);
    expect(student).toHaveProperty('_id');
    expect(student.name).toBe(studentData.name);
    expect(student.email).toBe(studentData.email);
    expect(student.placementStatus).toBe(studentData.placementStatus);
  });
});