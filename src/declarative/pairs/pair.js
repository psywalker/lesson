export const pair1 = (a = 5, b = 10) => {
  const elem1 = 2 * a;
  const elem2 = 3 * b;
  return {
    getElem1: () => elem1,
    getElem2: () => elem2,
    getResult: () => elem1 * elem2,
  };
};

export const pair2 = (elem1, elem2, a = 5, b = 10) => (elementType) => {
  switch (elementType) {
    case 2:
      return elem1;
    case 3:
      return elem2;
    default:
      return (elem1 * a) * (elem2 * b);
  }
};
