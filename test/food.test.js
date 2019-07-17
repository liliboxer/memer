require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');

const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

// const Food = require('../lib/models/Food');

describe('food routes', () => {
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
  it('create food', () => {
    return request(app)
      .post('/api/v1/food')
      .send({
        name: 'sushi',
        meal: 'every meal!',
        like: 85000
      })
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          name: 'sushi',
          meal: 'every meal!',
          like: 85000
        });
      });
  });
  // read
  // it('get food from db', async() => {
  //   const food = await Food.create({
  //     name: 'cheeseburger',
  //     meal: 'dinner',
  //     like: 300
  //   });
  //   const foodJSON = JSON.parse(JSON.stringify(food));
  //   return request(app)
  //     .get('/api/v1/food')
  //     .then(res => {
  //       expect(res.body).toEqual([foodJSON]);
  //     });
  // });

  // it('find food by id', async() => {
  //   const food = await Food.create({
  //     name: 'cheeseburger',
  //     meal: 'dinner',
  //     like: 300
  //   });
  //   return request(app)
  //     .get(`/api/v1/food/${food._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         __v: 0,
  //         _id: expect.any(String),
  //         name: 'cheeseburger',
  //         meal: 'dinner',
  //         like: 300
  //       });
  //     });
  // });
  // // update
  // it('update entire food', async() => {
  //   const food = await Food.create({
  //     name: 'cheeseburger',
  //     meal: 'dinner',
  //     like: 300
  //   });
  //   return request(app)
  //     .put(`/api/v1/food/${food._id}`)
  //     .send({ 
  //       name: 'pad thai',
  //       meal: 'lunch',
  //       like: 7500
  //     })
  //     .then(res => { 
  //       expect(res.body).toEqual({          
  //         __v: 0,
  //         _id: expect.any(String), 
  //         name: 'pad thai',
  //         meal: 'lunch',
  //         like: 7500
  //       });
  //     });
  // });
  // it('update only one part of food item', async() => {
  //   const food = await Food.create({
  //     name: 'pad thai',
  //     meal: 'lunch',
  //     like: 7500
  //   });
  //   return request(app)
  //     .patch(`/api/v1/food/${food._id}`)
  //     .send({ meal: 'dinner' })
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         __v: 0,
  //         _id: expect.any(String), 
  //         name: 'pad thai',
  //         meal: 'dinner',
  //         like: 7500
  //       });
  //     });
  // });
  // // delete 
  // it('delete food by id', async() => {
  //   const food = await Food.create({
  //     name: 'pad thai',
  //     meal: 'dinner',
  //     like: 7500
  //   });
  //   return request(app)
  //     .delete(`/api/v1/food/${food._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual({   
  //         __v: 0,
  //         _id: expect.any(String),    
  //         name: 'pad thai',
  //         meal: 'dinner',
  //         like: 7500
  //       });
  //     });
  // });
});
