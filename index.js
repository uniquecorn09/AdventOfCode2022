const fileReader = require("./common/fileReader.js");
const startPuzzle = require("./day1/aoc.js");
const CURRENTDAY = 2

const input = fileReader(__dirname + `/day${CURRENTDAY}/data.txt`);

startPuzzle(1, input);
startPuzzle(2, input);
