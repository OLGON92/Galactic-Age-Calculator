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

  mercYrsLeft() {
    const mercYrs = Math.floor((79 - this.earthAge) / .24);

    if(mercYrs > 0) {
      return `You have ${mercYrs} mercury years left to live!`;
    } else {
      let mercExp = mercYrs * -1;
      return `You have lived ${mercExp} mercury years past your life expectancy!`;
    }
  }

  venYrsLeft() {
    const venYrs = Math.floor((79 - this.earthAge) / .62);

    if(venYrs > 0) {
      return `You have ${venYrs} venus years left to live!`;
    } else {
      let venExp = venYrs * -1;
      return `You have lived ${venExp} venus years past your life expectancy!`;
    } 
  }

  marsYrsLeft() {
    const marsYrs = Math.floor((79 - this.earthAge) / 1.88);

    if(marsYrs > 0) {
      return `You have ${marsYrs} mars years left to live!`;
    } else {
      let marsExp = marsYrs * -1;
      return `You have lived ${marsExp} mars years past your life expectancy!`;
    } 
  }
}


