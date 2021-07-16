/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: 0(n)
// Explain:  Level 1 - increasing the length of the input array will increase the
// operation at the same rate

const check = require('check-types');

module.exports = function sortArray(arr) {
  if (arr.some(element => !Number.isInteger(element))) throw new TypeError();
  const sortedArray = [];
  let smallestNumber = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > smallestNumber) {
      smallestNumber = arr[i];
    }
    if (i === arr.length - 1) {
      sortedArray.unshift(smallestNumber);
      const index = arr.indexOf(smallestNumber);
      arr.splice(index, 1);
      i = -1;
      smallestNumber = Math.min(...arr);
    }
  }
  return sortedArray;
};

// LEVEL 1
// function sortArray(arr) {
//   check.assert.array.of.integer(arr)
//   return arr.sort((a, b) => a - b)
// }
