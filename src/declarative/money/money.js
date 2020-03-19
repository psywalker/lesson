const money = (amount = 0) => {
  const USD = 80;
  const EUR = 90;
  const CURRENT_CURRENCY = 'RUB';
  const MINIMUM_FRACTION_DIGITS = 2;
  const MAXIMUM_FRACTION_DIGITS = 2;
  let currentAmount = amount;

  const getCurrentAmountLocal = (currency) => currentAmount.toLocaleString('ru-RU', {
    style: 'currency', currency, minimumFractionDigits: MINIMUM_FRACTION_DIGITS, maximumFractionDigits: MAXIMUM_FRACTION_DIGITS,
  });

  return {
    add: (sum) => {
      currentAmount += sum;
      return money(currentAmount);
    },
    subtract: (sum) => {
      currentAmount = currentAmount - sum < 0 ? 0 : currentAmount - sum;
      return money(currentAmount);
    },
    format: (formatCurrency) => {
      switch (formatCurrency) {
        case 'eur':
          currentAmount /= EUR;
          return getCurrentAmountLocal(formatCurrency);
        case 'usd':
          currentAmount /= USD;
          return getCurrentAmountLocal(formatCurrency);
        default:
          return getCurrentAmountLocal(CURRENT_CURRENCY);
      }
    },
  };
};

export default money;
