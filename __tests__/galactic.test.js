import GalacticCalc from '../src/js/galactic.js';

describe('GalacticCalc', () => {
  let age;

  beforeEach(() => {
    age = new GalacticCalc(30);
  });

  test('should correctly create a GalacticCalc object based on users age', () => {
    expect(age.earthAge).toEqual(30);
  });

  test('should give the users age in Mercury years', () => {
    expect(age.mercAge()).toEqual(125);
  });

  test('should give the users age in Venus years', () => {
    expect(age.venusAge()).toEqual(48);
  });

  test('should give the users age in Mars years', () => {
    expect(age.marsAge()).toEqual(15);
  });

  test('should give the users age in Jupiter years', () => {
    expect(age.jupAge()).toEqual(2);
  });

  test('should give the users life expectancy in earth years in the form of a string', () => {
    expect(age.earthYrsLeft()).toEqual("You have 49 earth years left to live!");
  });
});