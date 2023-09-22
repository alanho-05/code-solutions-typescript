/* eslint-disable @typescript-eslint/no-unused-vars */
// Generic types; <> to denote type of data going into the Array
const names: Array<string> = ['Alan', 'Jane'];

console.log(names);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task completed!');
  }, 2000);
});

promise.then((resolve) => {
  console.log(resolve);
});

// Generic function with constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: 'Alan', hobbies: ['Weightlighting'] },
  { age: 30 }
);

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
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
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Alan' }, 'name'));

// Generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Alan');
textStorage.addItem('Jane');
textStorage.addItem('Yogi');
textStorage.removeItem('Yogi');
console.log('textStorage:', textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(30);
numberStorage.addItem(27);

// Generic utility types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial generic utility
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly generic utility
const volunteers: Readonly<string[]> = ['Max', 'Anna'];
