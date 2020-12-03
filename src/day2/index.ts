// Advent of Code 2020 - Day 2
// A program to validate passwords in a list according to their specified 'policy'

interface Policy {
  minimum: number;
  maximum: number;
  letterToCheck: string;
}

/**
 * Returns the number of valid passwords in an array of [policy & password] strings
 * @param {string[]} inputs An array of [policy & password] strings
 * @return {number} The number of valid passwords in the array
 */
export function findNumberOfValidPasswords(inputs: string[]): number {
  let numberOfValidPasswords: number = 0;

  for (let i = 0; i < inputs.length; i++) {
    const policy: Policy = extractPolicy(inputs[i]);
    const password: string = extractPassword(inputs[i]);

    if (validatePassword(password, policy) === true) {
      numberOfValidPasswords++;
    }
  }
  return numberOfValidPasswords;
}

/**
 * Extracts the min/max number of instances of a given letter from a string containing both policy and password
 * @param {string} input The input string
 * @return {Policy} The min/max number of instances of a given letter
 */
function extractPolicy(input: string): Policy {
  const minimum: number = +input.slice(0, input.indexOf('-'));
  const maximum: number = +input.slice(
    input.indexOf('-') + 1,
    input.indexOf(' ')
  );

  const policy: Policy = {
    minimum: minimum,
    maximum: maximum,
    letterToCheck: input.slice(input.indexOf(':') - 1, input.indexOf(':')),
  };
  return policy;
}

/**
 * Extracts the password from a string containing both policy and password
 * @param {string} input The input string
 * @return {string} The password
 */
function extractPassword(input: string): string {
  const password: string = input.slice(input.indexOf(':') + 2);
  return password;
}

/**
 * Checks the password contains the correct number of a given letter according to the policy
 * @param {string} password The input password string
 * @param {Policy} policy The password policy
 * @return {boolean} true if the password is valid, false if not
 */
function validatePassword(password: string, policy: Policy): boolean {
  const letterCount = countInstancesOfLetter(policy.letterToCheck, password);

  if (letterCount >= policy.minimum && letterCount <= policy.maximum) {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks the password contains the correct number of a given letter according to the policy
 * @param {string} letter The input letter to count
 * @param {string} password The password
 * @return {number} The number of instances of that letter in the password
 */
function countInstancesOfLetter(letter: string, password: string): number {
  let instances: number = 0;
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) === letter) {
      instances++;
    }
  }

  return instances;
}
