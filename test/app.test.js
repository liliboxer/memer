require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');

const mongoose = require('mongoose');
const Meme = require('../lib/models/Meme');

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

  // create 
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

  // read 
  it('get memes from db', async() => {
    const meme = await Meme.create({ topField: 'some text', image: 'some url' });
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        const memeJSON = JSON.parse(JSON.stringify(meme));
        expect(res.body).toEqual([memeJSON]);
      });
  });

  // update

  // delete 
}); 
