class Player {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getPlayerDetails() {
    return `Name: ${this.#name}, Age: ${this.#age}`;
  }
}

class Cricketer extends Player {
  #centuries;
  constructor(name, age, centuries) {
    super(name, age);
    this.#centuries = centuries;
  }

  // method overwrite
  getPlayerDetails() {
    return `This is a cricketer name ${this.getName()}`;
  }
}
const virat = new Cricketer("Virat", 33, 100);

console.log(virat.getPlayerDetails());
