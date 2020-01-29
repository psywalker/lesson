const smallestIntDivisior = (n) => {
  if (!n || typeof n !== 'number') return null;
  const iter = (num, int) => {
    if (num === 1) return int;
    if (!(n % num)) return iter(num - 1, num);
    return iter(num - 1, int);
  };
  return iter(n, n);
};

export default smallestIntDivisior;
