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
    const yrsLeft = Math.floor(79 - this.earthAge);
    
    if(yrsLeft > 0) {
        return `You have ${yrsLeft} earth years left to live!`;
      } else {
        let pastLfeExp = yrsLeft * -1;
        return `You have lived ${pastLfeExp} earth years past your life expectancy!`;
      }
  }

}


