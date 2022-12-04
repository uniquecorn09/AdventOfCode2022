const puzzle = require('./aoc')
const { readData, readNumbers } = require('../common/fileReader')
const solutions = readNumbers(__dirname + '/solutions.txt')

it('should find full intersections (Testdata)', () => {
  const input = readData(__dirname + '/testdata.txt')
  expect(puzzle(1, input)).toBe(2)
})

it('should find full intersections (Puzzledata)', () => {
  const input = readData(__dirname + '/data.txt')
  expect(puzzle(1, input)).toBe(solutions[0])
})

it('should find intersections (Testdata)', () => {
  const input = readData(__dirname + '/testdata.txt')
  expect(puzzle(2, input)).toBe(4)
})

it('should find intersections (Puzzledata)', () => {
  const input = readData(__dirname + '/data.txt')
  expect(puzzle(2, input)).toBe(solutions[1])
})
