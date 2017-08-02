// this module holds logic that only applicable for blackjack game.

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

export const calculateTotal = (cards) => {
  let values = cards.map((value) => {
    return value.slice(1);
  });
  let allACards = values.filter((value) => {
    return value === 'A';
  });
  let total = addPointBasedOnCards(values);
  for (let i = 0; i < allACards.length; i++) {
    if (total > 21) {
      total -= 10;
    }
  }
  return total;
}
