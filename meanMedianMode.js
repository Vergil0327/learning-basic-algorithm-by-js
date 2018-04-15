// return an object contains mean (array), median (array) & mode (array)
function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(arr) {
  return arr.reduce((accu, curr) => accu + curr) / arr.length;
}

function getMedian(arr) {
  arr.sort((x, y) => x - y)
  if (arr.length % 2 !== 0) return arr[Math.floor(arr.length / 2)]
  return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) /2 
}

function getMode(arr) {
  const map = new Map()
  let maxFrequency = 0;
  let modes = [];

  // Set Hash Map
  arr.forEach(el => {
    el
    if (!map.has(el)) map.set(el, 0)
    else map.set(el, map.get(el) + 1)
  })

  // 
  const iter = map.keys()
  for (key of iter) {
    // Important Step
    if (map.get(key) > maxFrequency) {
      // Set Modes
      modes = [key];
      maxFrequency = map.get(key);
    } else if (map.get(key) === maxFrequency) {
      // Handle Edge Case
      // When some key's frequency is the same as another one, push to modes
      modes.push(key)
    }
  }

  // Handle Edge Case
  // if everyone show up with the same frequency => No any modes exist.
  if (map.size === modes.length) modes.length = 0

  return modes
}

const ans = meanMedianMode([1, 2, 3, 6, 4, 5, 1])
ans
// const output = meanMedianMode([1, 2, 3, 6, 4, 5])
// output
