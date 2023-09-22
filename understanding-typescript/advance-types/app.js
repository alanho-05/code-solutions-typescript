/* eslint-disable no-void */
'use strict';
const employee = {
  name: 'Alan',
  privileges: ['access-database'],
  startDate: new Date(),
};
console.log(employee);
function printEmployeeInformation(emp) {
  console.log(`Name: ${emp.name}`);
  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ('startDate' in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
}
printEmployeeInformation(employee);
class Car {
  drive() {
    console.log('Zoom...');
  }
}
class Truck {
  drive() {
    console.log('Zooming...');
  }

  loadCargo(amount) {
    console.log(`Loading cargo: ${amount}`);
  }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);
const errorBag = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
console.log(errorBag);
function add(a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const resultOfAdd = add('Alan', ' Ho');
resultOfAdd.split(' ');
// Nullish coalescing; provides fallback values
const userInput = null;
const storedData =
  userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storedData);
