export default class GalacticCalc {
  constructor(age) {
    this.earthAge = age;
  }

  mercAge() {
    return Math.floor(this.earthAge / .24);
  }
}

