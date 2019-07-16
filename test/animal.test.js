require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');

const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

describe('animal routes', () => {
  // before and after shit 
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
  // create 
  it('creates animal', () => {
    return request(app)
      .post('/api/v1/animals')
      .send({
        type: 'Bunny',
        legs: 4,
        fluffy: true
      })
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          type: 'Bunny',
          legs: 4,
          fluffy: true
        });
      });
  });

  // read

  // update

  // delete 
});
