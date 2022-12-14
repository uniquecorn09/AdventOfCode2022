const puzzle = require('./aoc')
const { readData, readNumbers } = require('../common/fileReader')
const solutions = readNumbers(__dirname + '/solutions.txt')

it('should calculate the score of the strategy board (Testdata)', () => {
  const input = readData(__dirname + '/testdata.txt')
  expect(puzzle(1, input)).toBe(15)
})

it('should calculate the score of the strategy board (Puzzledata)', () => {
  const input = readData(__dirname + '/data.txt')
  expect(puzzle(1, input)).toBe(solutions[0])
})

it('should calculate the score of the strategy board (Testdata)', () => {
  const input = readData(__dirname + '/testdata.txt')
  expect(puzzle(2, input)).toBe(12)
})

it('should calculate the score of the strategy board (Puzzledata)', () => {
  const input = readData(__dirname + '/data.txt')
  expect(puzzle(2, input)).toBe(solutions[1])
})
