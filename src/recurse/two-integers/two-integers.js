const twoIntegers = (n1, n2) => {
  const num1 = +n1;
  const num2 = +n2;
  if (num1 === num2) return num1;
  if (num1 > num2) return `${num1}, ${twoIntegers(num1 - 1, num2)}`;
  return `${num1}, ${twoIntegers(num1 + 1, num2)}`;
};
export default twoIntegers;
