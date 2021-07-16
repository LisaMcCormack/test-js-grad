/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: 0(n)
// Explain: Increasing the number of words in the input increases
// the operation at the same rate

module.exports = function reverseWordsInSentence(input) {
  return input.split(' ').map(word => {
    return word.split('').reverse().join("")
  }).join(' ')
};



