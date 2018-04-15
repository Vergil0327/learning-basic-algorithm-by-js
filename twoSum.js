/*
 * Returns every pair of numbers from `numArray`
 * that adds up to the `sum`
 * Ex.
 * numArray = [1, 6, 4, 5, 3, 3]; sum = 7
 * results will be [[1, 6], [3, 4], [3, 4]]
 * 
 * PS.
 * Result should be an array of arrays
 * Any number in numArray can be used in multiple pairs
 */
function twoSum(numArray, sum) {
  const pairs = [];
  const hashTable = []
  for (let i = 0; i < numArray.length; i++) {
    let currentNum = numArray[i];
    let counterPart = sum - currentNum

    if (hashTable.includes(counterPart)) {
      pairs.push([currentNum, counterPart])
    }

    hashTable.push(currentNum);
  }

  return pairs;
}

const output = twoSum([1, 2, 3, 4, 5, 6, 7, 6, 4, 4, 5, 2], 5)
output
