function isPalindrome(text) {
  const validChar = /[a-z]/;
  const validCharArr = text.toLowerCase()
                           .split('')
                           .filter(char => validChar.test(char));

  return validCharArr.join('') === validCharArr.reverse().join('') ? true : false;
}

const ans = isPalindrome('Madam I\'m Adam') // Answer is true because it equals to itself when reversing char order
