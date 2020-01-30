const smallestIntDivisior = (n, int = 2) => {
  if (!(n % int)) return int;
  return smallestIntDivisior(n, int + 1);
};

export default smallestIntDivisior;
