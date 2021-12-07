const logger = require("../common/logger");

const DAY = 1;

const calculateFuel = (mass) => {
  return Math.floor(mass / 3) - 2;
};

const extendedFuel = (mass) => {
  let fuel = calculateFuel(mass);
  logger.debug(`Fuel: ${fuel}`);
  let additionalFuel = calculateFuel(fuel);
  logger.debug(`Addtional Fuel: ${additionalFuel}`);
  if (additionalFuel > 0) {
    let additionalFuel = extendedFuel(fuel);
    fuel += additionalFuel;
  }
  return fuel;
};
const part1 = (input) => {
  let solution = 0;
  logger.info(`-------------------------------------`);
  logger.info(`Input    for Day ${DAY} Part 1: ${input}`);
  input.forEach((mass) => {
    let requiredFuel = calculateFuel(mass);
    logger.debug(`Required fuel for a ${mass} module: ${requiredFuel}`);
    solution += requiredFuel;
  });
  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`);
  return solution;
};

const part2 = (input) => {
  let solution = 0;
  logger.info(`-------------------------------------`);
  logger.info(`Input    for Day ${DAY} Part 2: ${input}`);
  input.forEach((mass) => {
    let requiredFuel = extendedFuel(mass);
    logger.debug(`Required fuel for a ${mass} module: ${requiredFuel}`);
    solution += requiredFuel;
  });
  logger.info(`Solution for Day ${DAY} Part 2: ${solution}`);
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
