/* this module holds functions for creating and shuffling a deck of
  cards and can be reuse in any other 52 cards game, not just for blackjack.
*/

export const populateCards = () => {
  const suits = {
    'H': 'hearts',
    'D': 'diamonds',
    'S': 'spades',
    'C': 'clubs'
  };
  let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  let deckOfCards = {}
  for (let letter in suits) {
    for (let value of cards) {
      deckOfCards[letter + value] = `./cards/${suits[letter]}_${value}.jpg`;
    }
  }
  return deckOfCards;
};

export const shuffle = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
};

export const deal = (cards) => {
  return cards.pop();
};
