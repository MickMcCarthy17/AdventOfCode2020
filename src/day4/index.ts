import inputs from './inputs.json';

const requiredFields: string[] = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
];

console.log(countNumberOfValidPassports(inputs, requiredFields));

/**
 * Returns the number of valid passports in an array of passport strings
 * @param {string[]} inputs An array of passport strings
 * @param {string[]} requiredFields The required fields for a passport to be valid
 * @return {number} The number of valid passports in the array
 */
export function countNumberOfValidPassports(
  inputs: string[],
  requiredFields: string[]
): number {
  let numberOfValidPassports: number = 0;

  const passports: string[] = createPassports(inputs);

  for (let i = 0; i < passports.length; i++) {
    if (checkPassportIsValid(passports[i], requiredFields)) {
      numberOfValidPassports++;
    }
  }
  return numberOfValidPassports;
}

/**
 * Returns an array of passport strings from an array of fields delimited by "" characters
 * @param {string[]} inputs An array of field strings
 * @return {string[]} An array of passports
 */
function createPassports(inputs: string[]): string[] {
  const passports: string[] = [];
  let singlePassport: string = '';
  for (let i = 0; i < inputs.length; i++) {
    singlePassport = singlePassport.concat(inputs[i]);

    if (inputs[i] === '' || i === inputs.length - 1) {
      passports.push(singlePassport);
      singlePassport = '';
    }
  }

  return passports;
}

/**
 * Checks whether a single passport is valid
 * @param {string} passport A single passport string
 * @param {string[]} requiredFields The required fields for a passport to be valid
 * @return {boolean} True if the passport is valid, false if it is not
 */
function checkPassportIsValid(
  passport: string,
  requiredFields: string[]
): boolean {
  const fieldsInPassport: string[] = getFieldsInPassport(passport);

  // Validate all required fields are present

  if (requiredFields.every((i) => fieldsInPassport.includes(i))) {
    return checkDataIsValid();
  } else {
    return false;
  }
}

function checkDataIsValid() {
  // Switch statement for each field?
}

/**
 * Extracts the fields present in the passport
 * @param {string} passport A single passport string
 * @return {string[]} True if the passport is valid, false if it is not
 */
function getFieldsInPassport(passport: string): string[] {
  const indicesOfEveryColon: number[] = getIndicesOfEveryColon(passport);
  const fieldsInPassport: string[] = [];

  for (let i = 0; i < indicesOfEveryColon.length; i++) {
    const field: string = passport.slice(
      indicesOfEveryColon[i] - 3,
      indicesOfEveryColon[i]
    );
    fieldsInPassport.push(field);
  }

  return fieldsInPassport;
}

/**
 * Extracts the indices of every ':' character in a string
 * @param {string} inputString The input string
 * @param {string[]} requiredFields The required fields for a passport to be valid
 * @return {boolean} True if the passport is valid, false if it is not
 */
function getIndicesOfEveryColon(inputString: string): number[] {
  const indicesOfEveryColon: number[] = [];

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === ':') {
      indicesOfEveryColon.push(i);
    }
  }

  return indicesOfEveryColon;
}
