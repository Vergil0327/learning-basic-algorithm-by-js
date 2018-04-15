function caesarCipher (str, num) {
  const charCodeOfa = 'a'.charCodeAt(0);
  const charCodeOfz = 'z'.charCodeAt(0);
  const charCodeOfA = 'A'.charCodeAt(0);
  const charCodeOfZ = 'Z'.charCodeAt(0);
  const a2zRegex = /[a-z]/;
  const A2ZRegex = /[A-Z]/;
  const ALPHABET_NUM = 26;

  return str
    .split('')
    .map(char => {
      const charCode = char.charCodeAt(0);
      const shiftNum = num % 26; // !impotant step
      let newCharCode = char.charCodeAt(0) + shiftNum;

      // Handle a-z
      if (a2zRegex.test(char)) {
        if (newCharCode < charCodeOfa) newCharCode = charCodeOfz + ALPHABET_NUM;
        if (newCharCode > charCodeOfz) newCharCode = newCharCode - ALPHABET_NUM;

        return newCharCode;
      }

      // Handle A-Z
      if (A2ZRegex.test(char)) {
        if (newCharCode < charCodeOfA) newCharCode = charCodeOfZ + ALPHABET_NUM;
        if (newCharCode > charCodeOfZ) newCharCode = newCharCode - ALPHABET_NUM;

        return newCharCode;
      }

      // Non-alphabet Just Return
      return charCode
    })
    .map(char => String.fromCharCode(char))
    .join('');
}

const ans = caesarCipher('abc xyz ABC XYZ', 1)
console.log(ans) // bcd yza BCD YZA

const test2 = caesarCipher('abc xyz ABC XYZ', -1);
console.log(test2) // zab wxy ZAB WXY



// 參考答案
// function caesarCipher(str,num) {
//   num = num % 26;
//   var lowerCaseString = str.toLowerCase();
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   var newString = '';
  
//   for (var i = 0; i < lowerCaseString.length; i++) {
//     var currentLetter = lowerCaseString[i];
//     if (currentLetter === ' ') {
//       newString += currentLetter;
//       continue;
//     }
//     var currentIndex = alphabet.indexOf(currentLetter);
//     var newIndex = currentIndex + num;
//     if (newIndex > 25) newIndex = newIndex - 26;
//     if (newIndex < 0) newIndex = 26 + newIndex;
//     if (str[i] === str[i].toUpperCase()) {
//       newString += alphabet[newIndex].toUpperCase();
//     }
//     else newString += alphabet[newIndex];
//   };
  
//   return newString;
// }
// const output = caesarCipher('Zoo Keeper', 2);
// output // Bqq Mggrgt