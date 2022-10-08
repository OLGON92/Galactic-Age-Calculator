import GalacticCalc from '../src/js/galactic.js';

describe('GalacticCalc', () => {
  let age;

  beforeEach(() => {
    age = new GalacticCalc(30);
  });

  test('should correctly create a GalacticCalc object based on users age', () => {
    expect(age.earthAge).toEqual(30);
  });

  test('should give the users age in Mercury time', () => {
    expect(age.mercAge()).toEqual(125);
  });
});