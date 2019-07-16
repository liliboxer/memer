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
  
}); 
