// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => 'Look a return from a useless function.';
console.log(myFunction());
// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param) => param;
console.log(anotherFunction('look a reurned argument'));
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => param1 + param2;
console.log(add(12, 12));
// let subtract = function (param1, param2) {
//       return param1 - param2;
//     };
let subtract = (param1, param2) => param1 - param2;
console.log(subtract(1, 2));

// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
let exampleArray = [ 1, 2, 3, 4 ];
let triple = exampleArray.map((num) => num * 3);
console.log(triple);
