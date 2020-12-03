import { findNumberOfValidPasswords } from './index';

const goodInput: string[] = [
  '2-4 p: ppppp',
  '1-2 t: ttt',
  '3-4 i: poiihh',
  '1-5 t: tsdkljwt',
  '4-10 s: sslkslksls',
];

const badInput: string[] = [
  '2-4 t: sckqsmcs',
  '2-4 r: sdlvsknvdsv',
  '2-5 q: dsdklsdvlkq',
  '1-2 y: yyyyyyyyy',
];

const emptyInput: string[] = [];

describe('Day 2', () => {
  describe('given that the policy is defined by count', () => {
    it('should return the correct number of valid passwords in a given set', () => {
      const numberOfValidPasswords = findNumberOfValidPasswords(
        goodInput,
        'count'
      );

      expect(numberOfValidPasswords).toBe(2);
    });

    it('should return zero if there are no valid passwords in the set', () => {
      const numberOfValidPasswords = findNumberOfValidPasswords(
        badInput,
        'count'
      );

      expect(numberOfValidPasswords).toBe(0);
    });
  });

  describe('given that the policy is defined by position', () => {
    it('should return the correct number of valid passwords in a given set', () => {
      const numberOfValidPasswords = findNumberOfValidPasswords(
        goodInput,
        'position'
      );

      expect(numberOfValidPasswords).toBe(2);
    });

    it('should return zero if there are no valid passwords in the set', () => {
      const numberOfValidPasswords = findNumberOfValidPasswords(
        badInput,
        'position'
      );

      expect(numberOfValidPasswords).toBe(0);
    });

    it('should return zero if the set is empty', () => {
      const numberOfValidPasswords = findNumberOfValidPasswords(
        emptyInput,
        'count'
      );

      expect(numberOfValidPasswords).toBe(0);
    });

    it('should return zero if the policy is not recognised', () => {
      const numberOfValidPasswords = findNumberOfValidPasswords(
        emptyInput,
        'some random policy'
      );

      expect(numberOfValidPasswords).toBe(0);
    });
  });
});
