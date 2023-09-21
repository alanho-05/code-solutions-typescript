class Department {
  private readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printAllEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  private latestReport: string;

  get mostRecentReport() {
    if (this.latestReport) {
      return this.latestReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid report!');
    }
    this.addReport(value);
  }

  constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.latestReport = reports[0];
  }

  addEmployee(employee: string) {
    if (employee === 'Alan') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.latestReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Yogi');

const accounting = new AccountingDepartment('d2', []);
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
