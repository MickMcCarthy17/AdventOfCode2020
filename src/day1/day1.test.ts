import { findMultipleOfNumbersThatSumToTargetNumber } from './index';

describe('Day 1', () => {
  it('should find two elements in the input array which sum to 2020 and multiply them together', () => {
    const inputs = ['1010', '1010', '23', '234', '2345'];
    const output = findMultipleOfNumbersThatSumToTargetNumber(inputs, 2020);
    expect(output).toBe(1010 * 1010);
  });

  it('should return undefined for an input array which does not contain elements which sum to 2020', () => {
    const inputs = ['1', '123', '1234', '12345'];
    const output = findMultipleOfNumbersThatSumToTargetNumber(inputs, 2020);
    expect(output).toBe(undefined);
  });

  it('should return undefined for an empty input array', () => {
    const inputs: any[] = [];
    const output = findMultipleOfNumbersThatSumToTargetNumber(inputs, 2020);
    expect(output).toBe(undefined);
  });
});
