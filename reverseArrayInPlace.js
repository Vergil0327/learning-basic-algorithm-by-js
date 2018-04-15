function reverseArrayInPlaceV1(arr) {
  // Mach.ceil can be remove, because judgement of for-loop
  // when i < 2.5 is just like i < 3 (if arr.length === 5)
  for (let i = 0; i < Math.ceil((arr.length - 1) / 2); i++) {
    const tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length -1 - i] = tmp
  }
}

function reverseArrayInPlaceV2(arr) {
  // Mach.ceil can be remove
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length -1 - i] = tmp
  }
}

const testArr1 = ['a', 'b', 'c', 'd']
const testArr2 = ['a', 'b', 'c', 'd', 'e']
const testArr3 = ['a', 'b', 'c', 'd', 'e', 'f']
reverseArrayInPlaceV2(testArr1)
reverseArrayInPlaceV2(testArr2)
reverseArrayInPlaceV2(testArr3)
testArr1
testArr2
testArr3
