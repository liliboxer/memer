require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');

const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const Bag = require('../lib/models/Bag');

describe('bag routes', () => {
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
  it('create bag', () => {
    return request(app)
      .post('/api/v1/bags')
      .send({
        type: 'tote bag',
        material: 'leather',
        numberOfStraps: 2,
        size: 'large'
      })
      .then(res => {
        expect(res.body).toEqual({
          type: 'tote bag',
          material: 'leather',
          numberOfStraps: 2,
          size: 'large'
        });
      });
  });
  // read

  // update

  // delete 
});
