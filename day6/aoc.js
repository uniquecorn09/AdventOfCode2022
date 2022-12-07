const logger = require('../common/logger')

const DAY = 6

const processMessage = (input, markerIndex) => {
  let charArray = input[0].split('')
  let duplicates = []
  let diffChars = 0
  for (let i = 0; i < charArray.length; i++) {
    logger.debug('Position: ' + i)
    logger.debug('Character: ' + charArray[i])
    if (duplicates.indexOf(charArray[i]) < 0) {
      duplicates.push(charArray[i])
      diffChars++
    } else {
      let index = duplicates.indexOf(charArray[i])
      for (let j = 0; j <= index; j++) {
        duplicates.shift()
      }
      duplicates.push(charArray[i])
      diffChars = duplicates.length
    }
    logger.debug(duplicates)
    {
      if (diffChars === markerIndex) {
        solution = i + 1
        return solution
      }
    }
  }
}

const part1 = (input) => {
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`)
  let solution = processMessage(input, 4)

  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`)
  logger.info(solution)
  return solution
}

const part2 = (input) => {
  let solution = processMessage(input, 14)
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`)
  logger.info(`Solution for Day ${DAY} Part 2: ${solution}`)
  logger.info(solution)
  return solution
}

const startPuzzle = (part, input) => {
  switch (part) {
    case 1:
      return part1(input)
    case 2:
      return part2(input)
    default:
      break
  }
}

module.exports = startPuzzle
