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

  earthYrsLeft() {
    let yrsLeft = Math.floor(79 - this.earthAge);
      if(yrsLeft < 79) {
        return `You have ${yrsLeft} earth years left to live!`;
      }
  }

}


