import { submitPlacementRequest } from './placementService';
import Student from '../models/Student';

describe('submitPlacementRequest', () => {
  it('should create a new placement request', async () => {
    const studentData = {
      name: 'John Doe',
      email: `john.doe.${Date.now()}@example.com`, // Use a unique email
      placementStatus: 'pending',
    };

    const student = await submitPlacementRequest(studentData);
    expect(student).toHaveProperty('_id');
    expect(student.name).toBe(studentData.name);

    // Clean up: Delete the test student from the database
    await Student.findByIdAndDelete(student._id);
  });
});