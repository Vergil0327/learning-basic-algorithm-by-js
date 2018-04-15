function binarySearch(numArray, key) {
  const middleIndex = Math.floor(numArray.length / 2);
  let middle = numArray[middleIndex];
  middle
  if (middle === key)
    return true;
  else if (middle < key && numArray.length > 1) // !important: check numArray.length > 1
    return binarySearch(numArray.slice(middleIndex, numArray.length), key);
  else if (middle > key && numArray.length > 1)
    return binarySearch(numArray.slice(0, middleIndex), key);
  else
    return false;
}

const output = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)
output