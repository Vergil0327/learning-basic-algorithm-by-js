function bubbleSort(array) {
  for (let i = array.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[j] > array[j + 1]) {
        // Swap value
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

const output = bubbleSort([5, 3, 8, 2, 41, 1, 12, 1, 52, 33]);
output

// Input: [5, 3, 8, 2, 1, 4]
// Next: [3, 5, 8, 2, 1, 4]
// Next: [3, 5, 2, 8, 1, 4]
// Next: [3, 5, 2, 1, 8, 4]
// Next: [3, 5, 2, 1, 4, 8]
// Next: [3, 2, 5, 1, 4, 8]
// Next: [3, 2, 1, 5, 4, 8]
// Next: [3, 2, 1, 4, 5, 8]
// Next: [2, 3, 1, 4, 5, 8]
// Next: [2, 1, 3, 4, 5, 8]
// Next: [1, 2, 3, 4, 5, 8]  -> Gotcha
// # of passes: array.length - 1 passes
// 這個例子就要排序通過5次(array.length - 1)