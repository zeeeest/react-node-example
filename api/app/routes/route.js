const express = require('express');
const imagesRouter = require('./images.route');

const router = express.Router();


router.use('/images', imagesRouter);

router.use((req, res) => {
  res.json({ error: 'Not found' });
});

module.exports = router;
