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

  test('should give the users life expectancy in Earth years in the form of a string', () => {
    expect(age.earthYrsLeft()).toEqual("You have 49 earth years left to live!");
  });

  test('should give the users number of Earth years that they have lived past their life expectancy in the form of a string', () => {
    expect(age2.earthYrsLeft()).toEqual("You have lived 11 earth years past your life expectancy!");
  });

  test('should give the users life expectancy in Mercury years in the form of a string', () => {
    expect(age.mercYrsLeft()).toEqual("You have 204 mercury years left to live!");
  });

  test('should give the users number of Mercury years that they have lived past their life expectancy in the form of a string', () => {
    expect(age2.mercYrsLeft()).toEqual("You have lived 46 mercury years past your life expectancy!");
  });

  test('should give the users life expectancy in Venus years in the form of a string', () => {
    expect(age.venYrsLeft()).toEqual("You have 79 venus years left to live!");
  });

  test('should give the users number of Venus years that they have lived past their life expectancy in the form of a string', () => {
    expect(age2.venYrsLeft()).toEqual("You have lived 18 venus years past your life expectancy!");
  });

  test('should give the users life expectancy in Mars years in the form of a string', () => {
    expect(age.marsYrsLeft()).toEqual("You have 26 mars years left to live!");
  });

  test('should give the users number of Mars years that they have lived past their life expectancy in the form of a string', () => {
    expect(age2.marsYrsLeft()).toEqual("You have lived 6 mars years past your life expectancy!");
  });

  test('should give the users life expectancy in Jupiter years in the form of a string', () => {
    expect(age.jupYrsLeft()).toEqual("You have 4 jupiter years left to live!");
  });

  test('should give the users number of Jupiter years that they have lived past their life expectancy in the form of a string', () => {
    expect(age2.jupYrsLeft()).toEqual("You have lived 1 jupiter years past your life expectancy!");
  });
});