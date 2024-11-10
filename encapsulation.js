class Employee {
  // In encaptulation principle we can make any private properties or methods that can be used within the class
  #salary;
  constructor(name, salary, months) {
    this.name = name;
    this.#salary = salary;
    this.months = months;
  }

  calculateSalary() {
    return this.#salary * this.months;
  }
}

const employeeOne = new Employee("John", 1000, 12);
console.log(employeeOne);
console.log(employeeOne.salary);
