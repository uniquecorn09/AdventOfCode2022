const logger = require("../common/logger");

const DAY = 1;

const part1 = (input) => {
  let solution;
  logger.debug("Input for Day " + DAY + " Part 1");
  logger.debug(input);
  logger.info("Solution for Day " + DAY + " Part 1");
  logger.info(solution);
  return 0;
};

const part2 = (input) => {
  logger.debug("Input for Day " + DAY + " Part 2");
  logger.debug(input);
  logger.info("Solution for Day " + DAY + " Part 2");
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
