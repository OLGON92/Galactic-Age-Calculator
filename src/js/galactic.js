export default class GalacticCalc {
  constructor(age) {
    this.earthAge = age;
  }

  mercAge() {
    return Math.floor(this.earthAge / .24);
  }

  venusAge() {
    return Math.floor(this.earthAge / .62);
  }

  marsAge() {
    return Math.floor(this.earthAge / 1.88);
  }

  jupAge() {
    return Math.floor(this.earthAge / 11.68);
  }
}

