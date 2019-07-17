require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');

const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const Animal = require('../lib/models/Animal');

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
  it('gets all animals', async() => {
    const animal = await Animal.create({  type: 'Bunny', legs: 4, fluffy: true });
    return request(app)
      .get('/api/v1/animals')
      .then(res => {
        const animalJSON = JSON.parse(JSON.stringify(animal));
        expect(res.body).toEqual([animalJSON]);
      });
  });
  it('gets animal by id', async() => {
    const animal = await Animal.create({  type: 'Bunny', legs: 4, fluffy: true });
    return request(app)
      .get(`/api/v1/animals/${animal._id}`)
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
  // update
  it('updates full animal', async() => {
    const animal = await Animal.create({  type: 'Bunny', legs: 4, fluffy: true });
    return request(app)
      .put(`/api/v1/animals/${animal._id}`)
      .send({ type: 'Lion', legs: 4, fluffy: false })
      .then(res => {
        expect(res.body).toEqual({   
          __v: 0,
          _id: expect.any(String),
          type: 'Lion',
          legs: 4,
          fluffy: false
        });
      });
  });
  it('updates only animal type', async() => {
    const animal = await Animal.create({  type: 'Bunny', legs: 4, fluffy: true });
    return request(app)
      .patch(`/api/v1/animals/${animal._id}`)
      .send({ type: 'Cat' })
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          type: 'Cat',
          legs: 4,
          fluffy: true
        });
      });
  });
  // delete 
});
