const logger = require('../common/logger')

const DAY = 4

const printSections = (s1, e1) => {
  let head = ''
  let tail = ''
  let section = ''
  for (let i = 1; i < 99; i++) {
    if (i < s1) {
      head += '[..]'
    } else if (i > e1) {
      tail += '[..]'
    } else {
      let num = i.toString().padStart(2, '0')
      section += '[' + num + ']'
    }
  }
  logger.debug(head + section + tail)
}

const hasFullIntersection = (elve1, elve2) => {
  let [s1, e1] = elve1.split('-').map((val) => Number(val))
  let [s2, e2] = elve2.split('-').map((val) => Number(val))
  // printSections(s1, e1)
  // printSections(s2, e2)
  // logger.debug()

  return (s1 >= s2 && e1 <= e2) || (s2 >= s1 && e2 <= e1)
}

const hasIntersection = (elve1, elve2) => {
  let [s1, e1] = elve1.split('-').map((val) => Number(val))
  let [s2, e2] = elve2.split('-').map((val) => Number(val))
  // printSections(s1, e1)
  // printSections(s2, e2)
  // logger.debug()

  return (s1 >= s2 && s1 <= e2) || (s2 >= s1 && s2 <= e1)
}

const part1 = (input) => {
  let solution = 0

  logger.debug(`Input for Day ${DAY} Part 1: ${input}`)

  input.forEach((pair) => {
    let [elve1, elve2] = pair.split(',')
    if (hasFullIntersection(elve1, elve2)) solution++
  })

  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`)
  return solution
}

const part2 = (input) => {
  let solution = 0
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`)

  input.forEach((pair) => {
    let [elve1, elve2] = pair.split(',')
    if (hasIntersection(elve1, elve2)) solution++
  })

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
