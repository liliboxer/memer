const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .post('/api/v1/animals', (req, res, next) => {
    const { type, legs, fluffy } = req.body;
    Animal
      .create({ type, legs, fluffy })
      .then(animal => res.send(animal))
      .catch(next);
  })

  .get('/api/v1/animals', (req, res, next) => {
    Animal
      .find()
      .then(animals => res.send(animals))
      .catch(next);
  });
