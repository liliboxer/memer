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
  })
  .put('/:id', (req, res, next) => {
    Bag
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(bag => res.send(bag))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    const { numberOfStraps } = req.body;
    Bag
      .findByIdAndUpdate(req.params.id, { numberOfStraps }, { new: true })
      .then(bag => res.send(bag))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Bag
      .findByIdAndDelete(req.params.id)
      .then(bag => res.send(bag))
      .catch(next);
  });
