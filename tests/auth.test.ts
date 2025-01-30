import request from 'supertest';
import app from '../app';

describe('Auth Validation', () => {
  test('POST /register - Invalid email format', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'invalid-email',
        password: '123'
      });

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: 'email',
          message: 'Invalid email format'
        })
      ])
    );
  });
});