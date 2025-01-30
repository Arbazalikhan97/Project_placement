import request from 'supertest';
import app from '../app';
import Student from '../models/Student';

describe('POST /api/auth/login', () => {
  it('should return a JWT token for valid credentials', async () => {
    const testEmail = `test-${Date.now()}@example.com`;
    await Student.create({
      name: 'Test User',
      email: testEmail,
      password: 'password123',
    });

    const response = await request(app)
      .post('/api/auth/login') // Ensure this matches the route path
      .send({
        email: testEmail,
        password: 'password123',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should return 400 for invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login') // Ensure this matches the route path
      .send({
        email: 'invalid@example.com',
        password: 'wrongpassword',
      });

    expect(response.status).toBe(400);
  });
});