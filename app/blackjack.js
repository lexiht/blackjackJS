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
};

export const checkForEarlyFinish = (humanTotal, computerTotal) => {
  if (humanTotal > 21) {
    return 'Sorry, you busted.';
  } else if (computerTotal > 21){
    return 'Congrats! You have won, the computer busted.';
  } else if (humanTotal === 21) {
    return 'Congrats! You have won.';
  } else if (computerTotal === 21) {
    return 'Sorry, the computer have won.';
  } else {
    return;
  }
};

export const gameoverAnnouncement = (humanTotal, computerTotal) => {
  if (computerTotal < humanTotal && humanTotal < 21 ) {
    return 'Congrats! You have won.';
  } else if (computerTotal > humanTotal && computerTotal < 21) {
    return 'Sorry, the computer has won.';
  } else if (computerTotal === humanTotal) {
    return 'It\'s a draw';
  } else {
    return;
  }
};
