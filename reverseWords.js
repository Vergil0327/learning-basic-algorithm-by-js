function reverseWords(string) {
  return string
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')
};

const output = reverseWords('this is a word')
output // should be: siht si a drow

const ans = reverseWords('how are you')
ans // Ans: woh era uoy