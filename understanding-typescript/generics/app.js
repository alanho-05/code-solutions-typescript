'use strict';
/* eslint-disable @typescript-eslint/no-unused-vars */
// Generic types; <> to denote type of data going into the Array
const names = ['Alan', 'Jane'];
console.log(names);
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task completed!');
  }, 2000);
});
promise.then((resolve) => {
  console.log(resolve);
});
// Generic function with constraints
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
const mergedObj = merge(
  { name: 'Alan', hobbies: ['Weightlighting'] },
  { age: 30 }
);
console.log(mergedObj);
function countAndDescribe(element) {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 0) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
// keyof constraint
function extractAndConvert(obj, key) {
  return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Alan' }, 'name'));
// Generic classes
class DataStorage {
  constructor() {
    this.data = [];
  }

  addItem(item) {
    this.data.push(item);
  }

  removeItem(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
const textStorage = new DataStorage();
textStorage.addItem('Alan');
textStorage.addItem('Jane');
textStorage.addItem('Yogi');
textStorage.removeItem('Yogi');
console.log('textStorage:', textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(30);
numberStorage.addItem(27);
// Partial generic utility
function createCourseGoal(title, description, date) {
  const courseGoal = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal;
}
// Readonly generic utility
const volunteers = ['Max', 'Anna'];
