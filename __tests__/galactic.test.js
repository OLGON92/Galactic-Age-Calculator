import test from 'node:test';
import { describe } from 'yargs';
import GalacticCalc from '../src/js/galactic.js';

describe('GalacticCalc', () => {
  let earthAge;

  beforeEach(() => {
    earthAge = new GalacticCalc(30);
  });

  test('should correctly create a GalacticCalc object based on users age', () => {
    expect(earthAge.age).toEqual(30);
  });
});