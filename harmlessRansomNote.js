function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');

  const magazineMap = new Map();
  magazineArr.forEach(
    element => magazineMap.has(element) ? magazineMap.set(element, magazineMap.get(element) + 1) : magazineMap.set(element, 1)
  );
  magazineMap
  let isNotePosible = true;
  noteArr.forEach(word => {
    if (magazineMap.has(word)) {
      const nextVal = magazineMap.get(word) - 1;
      magazineMap.set(word, nextVal);

      if (nextVal < 0) isNotePosible = false;
    } else {
      isNotePosible = false;
    }
  })

  // console.log(magazineMap, isNotePosible)
  return isNotePosible;
}

const ans = harmlessRansomNote('this is secret', 'this is the secret magazine text');
console.log(ans)