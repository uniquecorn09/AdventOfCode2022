const logger = require('../common/logger')

const DAY = 3
const ASCII_OFFSET_UPPER = 64
const ASCII_OFFSET_LOWER = 96

const getPriorities = (char) => {
  let priority = 0
  logger.debug(char)
  if (char === char.toLowerCase()) {
    priority = char.charCodeAt(0) - ASCII_OFFSET_LOWER
  } else priority = char.charCodeAt(0) - ASCII_OFFSET_UPPER + 26
  logger.debug(`Priority for ${char} is ${priority}`)
  return priority
}

const getDuplicate = (compartment1, compartment2) => {
  for (const char of compartment1) {
    if (compartment2.indexOf(char) >= 0) {
      return char
    }
  }
  return null
}

const getCommonChar = (rucksack1, rucksack2, rucksack3) => {
  for (const char of rucksack1) {
    if (rucksack2.indexOf(char) >= 0) {
      logger.debug(`R2 contains ${char}`)
      if (rucksack3.indexOf(char) >= 0) {
        logger.debug(`R3 contains ${char}`)
        return char
      }
    }
  }
  return null
}

const part1 = (input) => {
  let solution = 0
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`)
  input.forEach((rucksack) => {
    let split = rucksack.length / 2
    let compartment1 = rucksack.substring(0, split)
    let compartment2 = rucksack.substring(split)

    const char = getDuplicate(compartment1, compartment2)
    solution += getPriorities(char)
  })

  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`)
  logger.info(solution)
  return solution
}

const part2 = (input) => {
  let solution = 0
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`)
  for (let i = 2; i < input.length; i++) {
    if ((1 + i) % 3 === 0) {
      const char = getCommonChar(input[i], input[i - 1], input[i - 2])
      solution += getPriorities(char)
    }
  }
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
