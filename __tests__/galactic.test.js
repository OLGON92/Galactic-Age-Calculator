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
});