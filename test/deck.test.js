import { populateCards, shuffle, deal } from '../app/deck';

describe('create the deck', () => {
  test('populates 52 cards with images', () => {
    expect(Object.keys(populateCards()).length).toEqual(52);
  });
});

describe('shuffle the cards', () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0;
  global.Math = mockMath;

  test('returns new shuffled deck of 2 cards', () => {
    expect(shuffle(['H2', 'H3'])).toEqual(["H3", "H2"]);
  });

  test('returns new shuffled deck of 3 cards', () => {
    expect(shuffle(['H2', 'H3', 'C2'])).toEqual(["H3", "C2", "H2"]);
  });

  test('returns new shuffled deck of 4 cards', () => {
    expect(shuffle(['H2', 'H3', 'C2', 'C3'])).toEqual(["H3", "C2", "C3", "H2"]);
  });
});

describe('deal 1 card at a time', () => {
  test('returns the last card in deck of ["H2", "C10"]', () => {
    expect(deal(['H2', 'C10'])).toEqual('C10');
  });

  test('returns the last card in deck of ["H2", "C10"]', () => {
    expect(deal(['H2', 'C10', 'SJ'])).toEqual('SJ');
  });
});
