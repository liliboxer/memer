const { Router } = require('express');
const Bag = require('../models/Bag');

module.exports = Router()
  .post('/', (req, res, next) => {
    Bag
      .create({
        type: 'tote bag',
        material: 'leather',
        numberOfStraps: 2,
        size: 'large'
      })
      .then(bag => res.send(bag))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Bag
      .find()
      .then(bags => res.send(bags))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Bag
      .findById(req.params.id)
      .then(bag => res.send(bag))
      .catch(next);
  });
