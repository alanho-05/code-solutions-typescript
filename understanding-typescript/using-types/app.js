function addition(n1, n2) {
  return n1 + n2;
}
function printResult(num) {
  console.log('Result: '.concat(num));
}
function addAndHandle(n1, n2, cb) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(5, 6, printResult);
addAndHandle(5, 6, function (result) {
  console.log('addAndHandle: '.concat(result));
});
function sayHello(name) {
  console.log('Hello '.concat(name, '!'));
}
const combineValues = addition;
console.log('combineValues:', combineValues(4, 5));
printResult(addition(3, 5));
sayHello('Alan');
