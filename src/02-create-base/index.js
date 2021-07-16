// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: O(1)
// Explain: there can only be one input so time taken will always be the same

module.exports = function createBase(integer) {
  return function add(number) {
    return number + integer
  }
};
