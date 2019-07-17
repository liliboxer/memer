const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { type, legs, fluffy } = req.body;
    Animal
      .create({ type, legs, fluffy })
      .then(animal => res.send(animal))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Animal
      .find()
      .then(animals => res.send(animals))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Animal
      .findById(req.params.id)
      .then(animal => res.send(animal))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Animal
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(animal => res.send(animal))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const { type } = req.body;
    Animal
      .findByIdAndUpdate(req.params.id, { type }, { new: true })
      .then(animal => res.send(animal))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Animal
      .findByIdAndDelete(req.params.id)
      .then(animal => res.send(animal))
      .catch(next);
  });
