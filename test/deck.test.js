import { populateCards } from '../app/deck';

describe('create the deck', () => {
  test('populates 52 cards with images', () => {
    expect(Object.keys(populateCards()).length).toEqual(52);
  });
});
