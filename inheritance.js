class Human {
  constructor(name) {
    this.name = name;
    this.leg = 2;
    this.arm = 2;
  }
}

class Baby extends Human {
  constructor(name) {
    super(name);
    this.cute = true;
  }
  cry() {
    console.log("waaaaa");
  }
}

class Teenager extends Human {
  constructor(name) {
    this.cute = false;
  }
  cheat() {
    console.log("cheater");
  }
}

const babu = new Baby("babu");
// babu.cry();
// console.log(babu);

class Player {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old.`;
  }
}

class Cricketer extends Player {
  constructor(name, age, centuries) {
    super(name, age);
    this.centuries = centuries;
  }
}

class Footballer extends Player {
  constructor(name, age, goals) {
    super(name, age);
    this.goals = goals;
  }
}
const virat = new Cricketer("virat", 33, 100);
const ronaldo = new Footballer("ronaldo", 37, 200);

console.log(virat.getPlayerDetails());
console.log(ronaldo.getPlayerDetails());
