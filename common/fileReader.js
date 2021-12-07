const fs = require("fs");

const readData = (filepath) => {
  let dataCollection = [];
  try {
    const data = fs.readFileSync(filepath, "utf8");
    dataCollection = data.split("\n").map(Number);
    return dataCollection;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = readData;
