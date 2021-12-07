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
