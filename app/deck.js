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
      deckOfCards[letter + value] = `../cards/${suits[letter]}_${value}.jpg`;
    }
  }
  return deckOfCards;
};
