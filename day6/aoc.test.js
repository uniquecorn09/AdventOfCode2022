const puzzle = require('./aoc')
const { readData, readNumbers, readString } = require('../common/fileReader')
const solutions = readNumbers(__dirname + '/solutions.txt')

it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata1.txt')
  expect(puzzle(1, input)).toBe(7)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata2.txt')
  expect(puzzle(1, input)).toBe(5)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata3.txt')
  expect(puzzle(1, input)).toBe(6)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata4.txt')
  expect(puzzle(1, input)).toBe(10)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata5.txt')
  expect(puzzle(1, input)).toBe(11)
})

it('should process sample input (Puzzledata)', () => {
  const input = readString(__dirname + '/data.txt')
  expect(puzzle(1, input)).toBe(solutions[0])
})

it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata1.txt')
  expect(puzzle(2, input)).toBe(19)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata2.txt')
  expect(puzzle(2, input)).toBe(23)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata3.txt')
  expect(puzzle(2, input)).toBe(23)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata4.txt')
  expect(puzzle(2, input)).toBe(29)
})
it('should process sample input (Testdata)', () => {
  const input = readString(__dirname + '/testdata5.txt')
  expect(puzzle(2, input)).toBe(26)
})

it('should process sample input (Puzzledata)', () => {
  const input = readString(__dirname + '/data.txt')
  expect(puzzle(2, input)).toBe(solutions[1])
})
