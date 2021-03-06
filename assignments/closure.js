// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// let closure1 = 1
// function parent(){
//  closure2 = closure1 + 2
//   function child(){
//     closure3 = closure1 + closure2
//   }
//   function grandChild(){
//     closure3 = closure1 + closure2
//   }
// }


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count =  0

  return function(){
    count++;
    return count
  }

}

// Example usage:
const newCounter = counter()
newCounter()
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
