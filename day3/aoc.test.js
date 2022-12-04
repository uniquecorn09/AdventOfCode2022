const puzzle = require('./aoc')
const { readData, readNumbers } = require('../common/fileReader')
const solutions = readNumbers(__dirname + '/solutions.txt')

it('should calculate priority of misspacked item (Testdata)', () => {
  const input = readData(__dirname + '/testdata.txt')

  expect(puzzle(1, input)).toBe(157)
})

it('should calculate priority of misspacked item (Puzzledata)', () => {
  const input = readData(__dirname + '/data.txt')
  expect(puzzle(1, input)).toBe(solutions[0])
})

it('should calculate priority of misspacked item (Testdata)', () => {
  const input = readData(__dirname + '/testdata.txt')

  expect(puzzle(2, input)).toBe(70)
})

it('should calculate priority of misspacked item (Puzzledata)', () => {
  const input = readData(__dirname + '/data.txt')

  expect(puzzle(2, input)).toBe(solutions[1])
})
