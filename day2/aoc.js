const logger = require('../common/logger')

const DAY = 2
const SCORE_WIN = 6
const SCORE_DRAW = 3

const Signs = {
  Scissors: 'Scissors',
  Paper: 'Paper',
  Rock: 'Rock',
}

const choseSign = (code) => {
  switch (code) {
    case 'A':
    case 'X':
      return Signs.Rock
    case 'B':
    case 'Y':
      return Signs.Paper
    case 'C':
    case 'Z':
      return Signs.Scissors
  }
}

const getBaseScore = (sign) => {
  switch (sign) {
    case Signs.Scissors:
      return 3
    case Signs.Paper:
      return 2
    case Signs.Rock:
      return 1
  }
}

const choseStrategy = (code, opponent) => {
  switch (code) {
    case 'X':
      return getLoser(opponent)
    case 'Y':
      return opponent
    case 'Z':
      return getWinner(opponent)
  }
}

const getWinner = (opponent) => {
  switch (opponent) {
    case Signs.Scissors:
      return Signs.Rock
    case Signs.Paper:
      return Signs.Scissors
    case Signs.Rock:
      return Signs.Paper
  }
}

const getLoser = (opponent) => {
  switch (opponent) {
    case Signs.Scissors:
      return Signs.Paper
    case Signs.Paper:
      return Signs.Rock
    case Signs.Rock:
      return Signs.Scissors
  }
}

const playRPS = (player1, player2) => {
  let result = {}
  logger.debug('P1: ' + player1)
  logger.debug('P2: ' + player2)
  if (player1 === player2)
    return (result = { winner: 0, score: getBaseScore(player2) + SCORE_DRAW })

  if (player1 === Signs.Rock)
    if (player2 === Signs.Scissors) result = { winner: 1, score: getBaseScore(player1) + SCORE_WIN }
    else result = { winner: 2, score: getBaseScore(player2) + SCORE_WIN }

  if (player1 === Signs.Paper)
    if (player2 === Signs.Rock) result = { winner: 1, score: getBaseScore(player1) + SCORE_WIN }
    else result = { winner: 2, score: getBaseScore(player2) + SCORE_WIN }

  if (player1 === Signs.Scissors)
    if (player2 === Signs.Paper) result = { winner: 1, score: getBaseScore(player1) + SCORE_WIN }
    else result = { winner: 2, score: getBaseScore(player2) + SCORE_WIN }
  return result
}

const part1 = (input) => {
  let solution = 0
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`)
  input.forEach((game, index) => {
    const [player1, player2] = game.split(' ')
    logger.debug(`Your opponent choses ${choseSign(player1)}`)
    logger.debug(`You chose ${choseSign(player2)}`)

    const result = playRPS(choseSign(player1), choseSign(player2))
    let baseScore = 0

    if (result.winner === 2 || result.winner === 0) {
      baseScore = getBaseScore(choseSign(player1))
      solution += result.score

      logger.debug(`You won round ${index} with ${result.score} points`)
      logger.debug(`Your opponent lost with ${baseScore} points for chosing ${choseSign(player1)}`)
    } else {
      baseScore = getBaseScore(choseSign(player2))
      solution += baseScore

      logger.debug(`Your opponent won round ${index} with ${result.score} points`)
      logger.debug(`You lost with ${baseScore} points for chosing ${choseSign(player2)}`)
    }
  })

  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`)
  logger.info(solution)
  return solution
}

const part2 = (input) => {
  let solution = 0
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`)

  input.forEach((game, index) => {
    const [player1, strategy] = game.split(' ')
    logger.debug(`Your opponent choses ${choseSign(player1)}`)

    const player2 = choseStrategy(strategy, choseSign(player1))
    logger.debug(`You chose ${player2}`)

    const result = playRPS(choseSign(player1), player2)
    console.log(result)
    let baseScore = 0

    if (result.winner === 2 || result.winner === 0) {
      baseScore = getBaseScore(choseSign(player1))
      solution += result.score

      logger.debug(`You won or draw round ${index + 1} with ${result.score} points`)
      logger.debug(`Your opponent lost with ${baseScore} points for chosing ${choseSign(player1)}`)
    } else {
      baseScore = getBaseScore(player2)
      solution += baseScore

      logger.debug(`Your opponent won round ${index + 1} with ${result.score} points`)
      logger.debug(`You lost with ${baseScore} points for chosing ${player2}`)
    }
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
