const smallestIntDivisior = (n) => {
  let int = 2;
  while (int >= 1 && int <= n) {
    if (!(n % int)) return int;
    int += 1;
  }
  return n;
};

export default smallestIntDivisior;
