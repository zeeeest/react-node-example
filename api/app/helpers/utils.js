const fs = require('fs');

const writeToJSONFile = async (filepath, content) => {
  try {
    return await fs.writeFile(filepath, JSON.stringify(content), (err) => {
      if (err) {
        return err;
      }
      return content;
    });
  } catch (err) {
    return err;
  }
};

module.exports = {
  writeToJSONFile,
};
