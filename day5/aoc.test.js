const puzzle = require('./aoc')
const { readData, readNumbers, readMap } = require('../common/fileReader')
const solutions = readData(__dirname + '/solutions.txt')

it('should process sample input (Testdata)', () => {
  const input = readMap(__dirname + '/testdata.txt')
  expect(puzzle(1, input)).toBe('CMZ')
})

it('should process sample input (Puzzledata)', () => {
  const input = readMap(__dirname + '/data.txt')
  expect(puzzle(1, input)).toBe(solutions[0])
})

it('should process sample input (Testdata)', () => {
  const input = readMap(__dirname + '/testdata.txt')
  expect(puzzle(2, input)).toBe('MCD')
})

it('should process sample input (Puzzledata)', () => {
  const input = readMap(__dirname + '/data.txt')
  expect(puzzle(2, input)).toBe(solutions[1])
})
