const twoIntegers = (n1, n2) => {
  let num1 = +n1;
  const num2 = +n2;
  let str = '';

  while (num1 !== num2) {
    str += `${num1}, `;
    if (num1 > num2) num1 -= 1;
    else num1 += 1;
  }
  return str + num1;
};
export default twoIntegers;
