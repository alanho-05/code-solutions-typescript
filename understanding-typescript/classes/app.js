'use strict';
class Department {
  constructor(id, n) {
    this.employees = [];
    this.id = id;
    this.name = n;
  }

  static createEmployee(name) {
    return { name };
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
class AccountingDepartment extends Department {
  get mostRecentReport() {
    if (this.latestReport) {
      return this.latestReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value) {
    if (!value) {
      throw new Error('Please pass in a valid report!');
    }
    this.addReport(value);
  }

  constructor(id, reports) {
    super(id, 'Accounting');
    this.reports = reports;
    this.latestReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  addEmployee(employee) {
    if (employee === 'Alan') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text) {
    this.reports.push(text);
    this.latestReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}
const employee1 = Department.createEmployee('Yogi');
const accounting = AccountingDepartment.getInstance();
const hr = new Department('2', 'HR');
const it = new ITDepartment('d1', ['Alan']);
accounting.describe();
accounting.addEmployee('Alan');
accounting.addEmployee('Jane');
accounting.printAllEmployeeInfo();
accounting.addReport('Deadline in 3 days - Jane');
accounting.mostRecentReport = 'Task completed - Jane';
console.log(accounting.mostRecentReport);
accounting.printReports();
console.log(accounting);
console.log(hr);
console.log(it);
console.log(employee1);
