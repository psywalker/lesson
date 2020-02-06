export const reverseNumber1 = (n) => {
  const str = String(n);
  let strEnd = '';
  let count = str.length;
  while (count) {
    count -= 1;
    strEnd += str[count];
  }
  return Number(strEnd);
};

export const reverseNumber2 = (n) => Number(String(n).split('').reverse().join(''));
