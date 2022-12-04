const puzzle = require("./aoc");
const {readData, readNumbers}= require("../common/fileReader");
const solutions = readNumbers(__dirname + "/solutions.txt")

it("should give largest number of calories carried by one elve (Testdata)", () => {

  const input = readNumbers(__dirname + "/testdata.txt");
  expect(puzzle(1, input)).toBe(24000);
});

it("should give largest number of calories carried by one elve (Puzzledata)", () => {
  const input = readNumbers(__dirname + "/data.txt");
  expect(puzzle(1, input)).toBe(solutions[0]);
});


it("should give largest number of calories carried by three elves (Testdata)", () => {
  const input = readNumbers(__dirname + "/testdata.txt");
  expect(puzzle(2, input)).toBe(45000);
});

it("should give largest number of calories carried by three elve (Puzzledata)", () => {
  const input = readNumbers(__dirname + "/data.txt");
  expect(puzzle(2, input)).toBe(solutions[1]);
});