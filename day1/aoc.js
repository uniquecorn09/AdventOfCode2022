const logger = require("../common/logger");

const DAY = 1;

const part1 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`);
  input.forEach((mass) => {
    let requiredFuel = Math.floor(mass / 3) - 2;
    logger.debug(`Required fuel for a ${mass} module: ${requiredFuel}`);
    solution += requiredFuel;
  });
  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`);
  logger.info(solution);
  return solution;
};

const part2 = (input) => {
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`);
  logger.info(`Solution for Day ${DAY} Part 2: ${solution}`);
  logger.info(solution);
  return 0;
};

const startPuzzle = (part, input) => {
  switch (part) {
    case 1:
      return part1(input);
    case 2:
      return part2(input);
    default:
      break;
  }
};

module.exports = startPuzzle;
