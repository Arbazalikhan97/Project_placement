import request from 'supertest';
import app from '../app';
import Student from '../models/Student';

describe('POST /api/placements/placement-request', () => {
  it('should create a new placement request', async () => {
    const studentData = {
      name: 'John Doe',
      email: `john.doe.${Date.now()}@example.com`, // Use a unique email
      placementStatus: 'pending',
    };

    const response = await request(app)
      .post('/api/placements/placement-request')
      .send(studentData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe(studentData.name);

    // Clean up: Delete the test student from the database
    await Student.findByIdAndDelete(response.body._id);
  });
});