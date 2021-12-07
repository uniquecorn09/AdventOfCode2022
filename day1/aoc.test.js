const puzzle = require("./aoc");
const fileReader = require("../common/fileReader");

it("should process sample input", () => {
  const input = fileReader(__dirname + "/testdata.txt");
  expect(puzzle(1, input)).toBe(34241);
});

it("should process real input", () => {
  const input = fileReader(__dirname + "/data.txt");
  expect(puzzle(1, input)).toBe(3210097);
});

it("should process single input", () => {
  expect(puzzle(2, [14])).toBe(2);
});

it("should process single input", () => {
  expect(puzzle(2, [1969])).toBe(966);
});

it("should process real input", () => {
  const input = fileReader(__dirname + "/data.txt");
  expect(puzzle(2, input)).toBe(4812287);
});
