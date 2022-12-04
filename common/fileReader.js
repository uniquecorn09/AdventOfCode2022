const fs = require("fs");

const readNumbers = (filepath) => {
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


const readData = (filepath) => {
  let dataCollection = [];
  try {
    const data = fs.readFileSync(filepath, "utf8");
    const dataCollection = data.split("\n");
    return dataCollection;
  } catch (err) {
    console.error(err);
    return null;
  }
};
module.exports = {
  readNumbers: readNumbers,
  readData: readData
}

