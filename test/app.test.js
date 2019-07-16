require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');

const mongoose = require('mongoose');

// connection config
const connect = require('../lib/utils/connect');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates meme with POST', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        topField: 'this is a meme',
        image: 'some URL',
        bottomField: 'some more text'
      })
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          topField: 'this is a meme',
          image: 'some URL',
          bottomField: 'some more text',
        });
      });
  });
}); 
