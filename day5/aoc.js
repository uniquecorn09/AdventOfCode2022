const logger = require('../common/logger')

const DAY = 5

const processStacks = (piles, craneInstructions) => {
  craneInstructions.forEach((line) => {
    let [command, itemCount, from, fromIndex, to, toIndex] = line.split(' ')
    for (let i = 0; i < itemCount; i++) {
      piles[toIndex - 1] = [piles[fromIndex - 1][0]].concat(piles[toIndex - 1])
      piles[fromIndex - 1].shift()
    }
  })
  return piles
}

const part1 = (input) => {
  let solution = 0
  const { piles, craneInstructions } = input
  const stacks = processStacks(piles, craneInstructions)
  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`)
  solution = ''
  stacks.forEach((pile) => {
    solution += pile[0].toString()
  })
  logger.info(solution)
  return solution
}

const processCombinedStacks = (piles, craneInstructions) => {
  craneInstructions.forEach((line) => {
    console.log(line)
    let [command, itemCount, from, fromIndex, to, toIndex] = line.split(' ')
    let crats = piles[fromIndex - 1].slice(0, itemCount)
    console.log(piles)
    console.log(crats)
    piles[toIndex - 1] = crats.concat(piles[toIndex - 1])

    while (itemCount > 0) {
      piles[fromIndex - 1].shift()
      itemCount--
    }
  })
  console.log(piles)
  return piles
}
const part2 = (input) => {
  let solution = ''
  const { piles, craneInstructions } = input
  const stacks = processCombinedStacks(piles, craneInstructions)
  stacks.forEach((pile) => {
    solution += pile[0].toString()
  })
  logger.info(solution)
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
