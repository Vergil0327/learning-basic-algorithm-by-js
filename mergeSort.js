// Split unsorted array
function mergeSort(array) {
  // base case
  if (array.length < 2) return array;

  // recursive case
  const middleIndex = Math.floor(array.length / 2)
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

// merge sorted array
function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    let minElement;
    if (arr1[0] < arr2[0])
      minElement = arr1.shift();
    else
      minElement = arr2.shift();
  
    result.push(minElement);
  }

  // !important: after while loop
  // will left one empty array & another array that left some el not push to result
  // and all of these el are greater than all the elements in result array
  if (arr1.length)
    result = result.concat(arr1);
  else
    result = result.concat(arr2);

  return result;
}

const output = mergeSort([4, 61, 2, -3, 33, 212, 111, 67, 44, 52])
output

// Diagram [4, 3, 2, 1]
// FH = [4, 3], SH = [2, 1]
// return merge(mergeSort([4, 3]), mergeSort([2, 1]))
//   |                                          |
//   |                                          |
//   |                                          |
// FH = [4], SH = [3]                     FH = [2], SH = [1]
//   |                                                   \
// return merge(mergeSort([4]), mergeSort([3]))          return merge(mergeSort([2]), mergeSort([1]))
//   |                                                          |
//   |                                                          |
//   |                                                          |
// return merge([4], [3])                                  return merge([2], [1])
//   |                                                          |
//   |                                                          |
//   |                                                          |
// return [3, 4] back                                        return [1, 2] back
//     \                                                       /
//        \                                                  /
//          \                                              /
//            \                                          /
//              \                                      /
//                \                                 /
//                    return merge([3, 4], [1, 2])
//                                 |
//                                 |
//                        return [1, 2, 3, 4]