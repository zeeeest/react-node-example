const express = require('express');
const images = require('../controllers/images.controller');

const imagesRouter = express.Router();

imagesRouter.get('/', images.getImages);
imagesRouter.put('/:id', images.updateImage);

module.exports = imagesRouter;
