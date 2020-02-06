const imageService = require('../services/images.service');

const getImages = async (req, res) => {
  try {
    const images = await imageService.getAll();
    res.json(images);
  } catch (err) {
    if (err.status) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: err.message });
    }
  }
};

const updateImage = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedImage = await imageService.update(id, req.body);
    res.json(updatedImage);
  } catch (err) {
    res.status(err.status).json({ success: false, message: err.message });
  }
};

module.exports = {
  getImages,
  updateImage,
};
