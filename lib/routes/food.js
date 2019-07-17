const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router()
  .post('/', (req, res, next) => {
    Food
      .create({
        name: 'sushi',
        meal: 'every meal!',
        like: 85000
      })
      .then(food => res.send(food))
      .catch(next);
  });
  // .get('/', (req, res, next) => {
  //   Food
  //     .find()
  //     .then(food => res.send(food))
  //     .catch(next);
  // })
  // .get('/:id', (req, res, next) => {
  //   Food
  //     .findById(req.params.id)
  //     .then(food => res.send(food))
  //     .catch(next);
  // })
  // .put('/:id', (req, res, next) => {
  //   Food
  //     .findByIdAndUpdate(req.params.id, req.body, { new: true })
  //     .then(food => res.send(food))
  //     .catch(next);
  // })
  // .patch('/:id', (req, res, next) => {
  //   const { meal } = req.body;
  //   Food
  //     .findByIdAndUpdate(req.params.id, { meal }, { new: true })
  //     .then(food => res.send(food))
  //     .catch(next);
  // })
  // .delete('/:id', (req, res, next) => {
  //   Food
  //     .findByIdAndDelete(req.params.id)
  //     .then(food => res.send(food))
  //     .catch(next);
  // });
