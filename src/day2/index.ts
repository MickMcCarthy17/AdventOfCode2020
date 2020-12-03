// Advent of Code 2020 - Day 2
// A program to validate passwords in a list according to their specified 'policy'

interface PolicyData {
  firstNumber: number;
  secondNumber: number;
  letterToCheck: string;
}

/**
 * Returns the number of valid passwords in an array of [policy & password] strings
 * @param {string[]} inputs An array of [policy & password] strings
 * @param {string} policyType
 * @return {number} The number of valid passwords in the array
 */
export function findNumberOfValidPasswords(
  inputs: string[],
  policyType: string
): number {
  let numberOfValidPasswords: number = 0;

  for (let i = 0; i < inputs.length; i++) {
    const policy: PolicyData = extractPolicyData(inputs[i]);
    const password: string = extractPassword(inputs[i]);

    if (validatePassword(password, policy, policyType) === true) {
      numberOfValidPasswords++;
    }
  }
  return numberOfValidPasswords;
}

/**
 * Extracts the min/max number of instances of a given letter from a string containing both policy and password
 * @param {string} input The input string
 * @return {PolicyData} The min/max number of instances of a given letter
 */
function extractPolicyData(input: string): PolicyData {
  const firstNumber: number = +input.slice(0, input.indexOf('-'));
  const secondNumber: number = +input.slice(
    input.indexOf('-') + 1,
    input.indexOf(' ')
  );

  const policy: PolicyData = {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
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
 * Checks the password is valid according to the policy
 * @param {string} password The input password string
 * @param {PolicyData} policy The password policy
 * @param {string} policyType The policy being employed - count the occurrences of the letter or check it's position
 * @return {boolean} true if the password is valid, false if not
 */
function validatePassword(
  password: string,
  policy: PolicyData,
  policyType: string
): boolean | undefined {
  if (policyType === 'count') {
    return validateByCount(password, policy);
  } else if (policyType === 'position') {
    return validateByPosition(password, policy);
  } else {
    console.warn('Policy type not recognised!');
    return undefined;
  }
}

/**
 * Checks the password contains the correct number of a given letter according to the policy
 * @param {string} password The input password string
 * @param {PolicyData} policy The password policy
 * @return {boolean} true if the password is valid, false if not
 */
function validateByCount(password: string, policy: PolicyData): boolean {
  const letterCount = countInstancesOfLetter(policy.letterToCheck, password);

  if (letterCount >= policy.firstNumber && letterCount <= policy.secondNumber) {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks the password has the letter in the correct positions according to the policy
 * @param {string} password The input password string
 * @param {PolicyData} policy The password policy
 * @return {boolean} true if the password is valid, false if not
 */
function validateByPosition(password: string, policy: PolicyData): boolean {
  const letterIsAtFirstPosition =
    password.charAt(policy.firstNumber - 1) === policy.letterToCheck;

  const letterIsAtSecondPosition =
    password.charAt(policy.secondNumber - 1) === policy.letterToCheck;

  if (letterIsAtFirstPosition != letterIsAtSecondPosition) {
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
