const request = require('supertest');
const express = require('express');
const router = require('../routes/adoption.router');

const app = express();
app.use('/api/adoption', router);

describe('GET /api/adoption', () => {
  it('debería devolver 200 y un array', async () => {
    const res = await request(app).get('/api/adoption');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
