// this module holds logic only applicable for blackjack game.

export const addPointBasedOnCards = (values) => {
  let currentTotal = 0;
  values.forEach((value) => {
    if (value === 'A') {
      currentTotal += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      currentTotal += 10;
    } else {
      currentTotal += +value;
    }
  })
  return currentTotal;
};
