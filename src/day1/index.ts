import inputs from './inputs.json';

// Advent of Code 2020 - Day 1
// A program to find two numbers in a list which sum to a given target number
// Given that a solution definitely exists

/**
 * Finds two numbers in an input array which sum to a target integer
 * @param {string[]} inputs The input array
 * @param {number} targetNumber The target integer
 * @return {number[] | undefined} The multiple of the two numbers in the input array which sum to the target integer
 * or undefined if there are no such numbers
 */
export function findMultipleOfNumbersThatSumToTargetNumber(
  inputs: string[],
  targetNumber: number
): number | undefined {
  const numbersThatSumTo2020: number[] | undefined = findNumbers(inputs, 2020);
  const multiple: number | undefined = multiplyNumbers(numbersThatSumTo2020);
  return multiple;
}

/**
 * Finds two numbers in an input array which sum to a target integer
 * @param {string[]} inputs The input array
 * @param {number} targetNumber The target integer
 * @return {number[]} The two numbers which sum to the target integer.
 */
export function findNumbers(
  inputs: string[],
  targetNumber: number
): number[] | undefined {
  for (let i = 0; i < inputs.length; i++) {
    const firstEntry: number = +inputs[i];

    for (let j = i; j < inputs.length; j++) {
      const secondEntry: number = +inputs[j];
      if (targetNumber === firstEntry + secondEntry) {
        console.log([firstEntry, secondEntry]);
        return [firstEntry, secondEntry];
      }
    }
  }

  console.warn(
    'There are no two integers which sum to the target number in the input array'
  );
  return undefined;
}

/**
 * Multiplies the first two elements of an input array together
 * @param {number[]} inputs The input array
 * @return {number[]} The multiple of the first two elements in the array
 */
export function multiplyNumbers(
  inputs: number[] | undefined
): number | undefined {
  if (inputs) {
    return inputs[0] * inputs[1];
  }
}
