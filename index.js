const fileReader = require("./common/fileReader.js");
const startPuzzle = require("./day1/aoc.js");
const input = fileReader(__dirname + "/day1/data.txt");
startPuzzle(1,input);
startPuzzle(2, fileReader(__dirname + "day1/data.txt"));
