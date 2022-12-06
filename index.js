const { readData, readNumbers, readMap } = require('./common/fileReader')
const startPuzzle = require('./day5/aoc.js')
const CURRENTDAY = 5

const input = readMap(__dirname + `/day${CURRENTDAY}/testdata.txt`)

// startPuzzle(1, input)
startPuzzle(2, input)
