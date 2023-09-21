type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
  name: 'Alan',
  privileges: ['access-database'],
  startDate: new Date(),
};

console.log(employee);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
