// Advent of Code 2020 - Day 1
// A program to find two numbers in a list which sum to a given target number

// TODO - Refactor for extensibility

/**
 * Finds two numbers in an input array which sum to a target integer
 * @param {string[]} inputs The input array
 * @param {number} targetNumber The target integer
 * @param {number} numberOfAdditions The desired number of numbers adding up to the target integer
 * i.e. if numberOfAdditions is 2 then there must be 2 numbers adding up to the target number
 * @return {number[] | undefined} The multiple of the two numbers in the input array which sum to the target integer
 * or undefined if there are no such numbers
 */
export function findMultipleOfNumbersThatSumToTargetNumber(
  inputs: string[],
  targetNumber: number,
  numberOfAdditions: number
): number | undefined {
  const numbersThatSumToTarget: number[] | undefined = findNumbers(
    inputs,
    targetNumber,
    numberOfAdditions
  );
  const multiple: number | undefined = multiplyNumbers(numbersThatSumToTarget);
  return multiple;
}

/**
 * Finds two numbers in an input array which sum to a target integer
 * If a solution with three numbers exists, the function returns three
 * numbers which sum to the target integer instead
 * @param {string[]} inputs The input array
 * @param {number} targetNumber The target integer
 * @param {number} numberOfAdditions The desired number of numbers adding up to the target integer
 * i.e. if numberOfAdditions is 2 then there must be 2 numbers adding up to the target number
 * @return {number[]} The two numbers which sum to the target integer.
 */
export function findNumbers(
  inputs: string[],
  targetNumber: number,
  numberOfAdditions: number
): number[] | undefined {
  // TODO - this function can probably be made extensible to N entries via recursion
  let output: number[] = [];

  for (let i = 0; i < inputs.length; i++) {
    const firstEntry: number = +inputs[i];

    for (let j = i; j < inputs.length; j++) {
      const secondEntry: number = +inputs[j];

      if (targetNumber === firstEntry + secondEntry) {
        output = [firstEntry, secondEntry];
        if (numberOfAdditions === 2) {
          return output;
        }
      } else {
        for (let k = j; k < inputs.length; k++) {
          const thirdEntry: number = +inputs[k];

          if (targetNumber === firstEntry + secondEntry + thirdEntry) {
            output = [firstEntry, secondEntry, thirdEntry];
            if (numberOfAdditions === 3) {
              return output;
            }
          }
        }
      }
    }
  }
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
    let output: number = 1;
    for (let i = 0; i < inputs.length; i++) {
      output *= inputs[i];
    }
    return output;
  }
}
