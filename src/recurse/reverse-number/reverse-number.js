export const reverseNumber1 = (n) => {
  const iter = (num, count) => {
    if (!count) return num[0];
    return `${num[count]}${iter(num, count - 1)}`;
  };
  return Number(iter(String(n), String(n).length - 1));
};

export const reverseNumber2 = (n, count = String(n).length - 1) => {
  if (!count) return Number(String(n)[0]);
  return Number(String(n)[count] + reverseNumber2(String(n), count - 1));
};
