'use strict';
class Department {
  constructor(id, n) {
    this.employees = [];
    this.id = id;
    this.name = n;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  printAllEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  constructor(id, admins) {
    super(id, 'IT');
    this.admins = admins;
  }
}
const accounting = new Department('1', 'Accounting');
const hr = new Department('2', 'HR');
const it = new ITDepartment('d1', ['Alan']);
accounting.describe();
accounting.addEmployee('Alan');
accounting.addEmployee('Jane');
accounting.printAllEmployeeInfo();
console.log(accounting);
console.log(hr);
console.log(it);
