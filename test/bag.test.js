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
          __v: 0,
          _id: expect.any(String),
          type: 'tote bag',
          material: 'leather',
          numberOfStraps: 2,
          size: 'large'
        });
      });
  });
  // read
  it('get bag from db', async() => {
    const bag = await Bag.create({
      type: 'clutch',
      material: 'plastic',
      numberOfStraps: 0,
      size: 'small'
    });
    const bagJSON = JSON.parse(JSON.stringify(bag));
    return request(app)
      .get('/api/v1/bags')
      .then(res => {
        expect(res.body).toEqual([bagJSON]);
      });
  });

  it('find bag by id', async() => {
    const bag = await Bag.create({
      type: 'clutch',
      material: 'plastic',
      numberOfStraps: 0,
      size: 'small'
    });
    return request(app)
      .get(`/api/v1/bags/${bag._id}`)
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          type: 'clutch',
          material: 'plastic',
          numberOfStraps: 0,
          size: 'small'
        });
      });
  });

  // update


  // delete 
});
