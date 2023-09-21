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
