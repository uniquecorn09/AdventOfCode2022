const { readData, readNumbers, readMap, readString } = require('./common/fileReader')
const CURRENTDAY = 6
const startPuzzle = require(`./day${CURRENTDAY}/aoc.js`)

const input = readString(__dirname + `/day${CURRENTDAY}/data.txt`)

startPuzzle(1, input)
// startPuzzle(2, input)
