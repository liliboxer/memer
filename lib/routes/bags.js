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
  });
