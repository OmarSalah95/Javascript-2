// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = [ 'Pencil', 'Notebook', 'yo-yo', 'Gum' ];
// const bulkItems = ["My little sister", "Lawn Mover", "Bag full of bricks"]

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   return cb(arr.length)
// }

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   return cb(arr[arr.length - 1])
// }

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   return cb(x + y)
// }

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   return cb(x * y)
// }

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.

//   // return cb(list.includes(item))
// //   if (cb(list.includes(item))){
// //     return true;
// //   }
// //   // else
// //   {
// //     return false;
// //   }
// // }

const items = [ 'Pencil', 'Notebook', 'yo-yo', 'Gum' ];
const bulkItems = [ 'My little sister', 'Lawn Mover', 'Bag full of bricks' ];

const callback1 = (yesOrNo) => {
	console.log(yesOrNo);
};

const callback2 = (yesOrNo) => {
	if (yesOrNo == 'true') {
		console.log('Yes it is in the List');
	} else {
		console.log("Nope, Can't find it.");
	}
};

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false.
	cb(list.includes(item).toString());
}

contains('Pencil', items, callback1); // true
contains('Pencils', items, callback1); // false

contains('Notebook', items, callback2); // Yes, it is in the List
contains('Gum', bulkItems, callback2); // Nope, Can't find it."

contains('My little sister', bulkItems, callback2); // Yes, it is in the List
contains('Bag full of bricks', items, callback2); // Nope, Can't find it."

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Pass the duplicate free array to the callback function.
	// Do not mutate the original array.
}

const numbers = [ 1, 2, 3, 4, 5, 6 ];

numbers.reduce((accumulator, currentValue, currentIndex) => {
	console.log('This is the accumulator value:', accumulator);
	console.log('This is the Current array item Value:', currentValue);
	console.log('This is the Current Index in the array:', currentIndex);
	console.log(`Accumulator now equels Accumulator + Current Value or: ${accumulator + currentValue}`);
	return (accumulator += currentValue);
}, 0);
