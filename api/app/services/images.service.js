const imagesData = require('../data/images.json');
const {writeToJSONFile} = require('../helpers/utils.js');

const filepath = 'app/data/images.json';

const getAll = async () => {
  try {
    return imagesData;
  } catch (err) {
    return err;
  }
};

const update = async (id, data) => {
  try {
    const images = await getAll();
    let updatedImage = null;
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        updatedImage = { ...image, ...data };
        return updatedImage;
      }
      return image;
    });
    await writeToJSONFile(filepath, updatedImages);
    return updatedImage;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAll,
  update,
};
