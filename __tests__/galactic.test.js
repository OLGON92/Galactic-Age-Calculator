import GalacticCalc from '../src/js/galactic.js';

describe('GalacticCalc', () => {
  let age;
  let age2;

  beforeEach(() => {
    age = new GalacticCalc(30);
  });


  beforeEach(() => {
    age2 = new GalacticCalc(90);
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

  test('should give the users number of earth years that they have lived past their life expectancy in the form of a string', () => {
    expect(age2.earthYrsLeft()).toEqual("You have lived 11 earth years past your life expectancy!");
  });
});