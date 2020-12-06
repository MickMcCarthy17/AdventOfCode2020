import { countNumberOfValidPassports } from '.';

const requiredFields: string[] = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
];

describe('Day 4', () => {
  it('should return the correct number of valid passports for a single invalid passport', () => {
    const singlePassport: string[] = [
      'iyr:2013 hcl:#ceb3a1',
      'hgt:151cm eyr:2030',
    ];

    const numberOfValidPassports = countNumberOfValidPassports(
      singlePassport,
      requiredFields
    );

    expect(numberOfValidPassports).toBe(0);
  });

  it('should return the correct number of valid passports for a single valid passport', () => {
    const singlePassport: string[] = [
      'byr:1943 ecl:grn',
      '',
      'eyr:1988',
      'iyr:2015 ecl:gry',
      'hgt:153in pid:173cm',
      'byr:1999 hcl:#bre3e2',
    ];

    const numberOfValidPassports = countNumberOfValidPassports(
      singlePassport,
      requiredFields
    );

    expect(numberOfValidPassports).toBe(1);
  });
});
