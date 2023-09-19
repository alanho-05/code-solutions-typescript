function addition(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 6, printResult);
addAndHandle(5, 6, (result) => {
  console.log(`addAndHandle: ${result}`);
});

function sayHello(name: string): void {
  console.log(`Hello ${name}!`);
}

const combineValues: (a: number, b: number) => number = addition;

console.log('combineValues:', combineValues(4, 5));

printResult(addition(3, 5));
sayHello('Alan');
