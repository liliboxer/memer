const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { topField, image, bottomField } = req.body;
    Meme
      .create({ topField, image, bottomField })
      .then(meme => res.send(meme))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Meme 
      .find()
      .then(memes => res.send(memes))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Meme 
      .findById(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  })
;
