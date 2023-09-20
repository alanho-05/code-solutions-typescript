'use strict';
class Department {
  constructor(n) {
    this.name = n;
  }
}
const accounting = new Department('Accounting');
const hr = new Department('HR');
console.log(accounting);
console.log(hr);
