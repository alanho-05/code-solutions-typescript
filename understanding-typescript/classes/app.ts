class Department {
  private readonly id: string;
  private name: string;
  private employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
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
