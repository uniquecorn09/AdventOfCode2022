const logger = require("../common/logger");

const DAY = 1;

const part1 = (input) => {
  let solution = 0;
  
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`);
  const elves = [];
  let totalCalories = 0

  input.forEach(calories => {
    if (calories != 0) {
      totalCalories = calories + totalCalories
    }
    else{
      elves.push(totalCalories)
      totalCalories = 0
    }
  });
  elves.push(totalCalories)
  logger.debug(`Elves: ${elves}`)
  solution = elves.reduce((acc, val) => {return (Math.max(acc, val))})

  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`);
  logger.info(solution);
  return solution;
};

const part2 = (input) => {
  let solution = 0;

  logger.debug(`Input for Day ${DAY} Part 2: ${input}`);
  const elves = [];
  let totalCalories = 0
  input.forEach(calories => {
    if (calories != 0) {
      totalCalories = calories + totalCalories
    }
    else{
      elves.push(totalCalories)
      totalCalories = 0
    }
  });
  elves.push(totalCalories)
  const topElves = elves.sort((a, b) => {return b-a}).slice(0,3)
  logger.info(`Top 3 Elves:  ${topElves}`)
  solution = topElves.reduce((acc, val) => {return acc+val})
  logger.info(`Solution for Day ${DAY} Part 2: ${solution}`);
  logger.info(solution);
  return solution;
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
