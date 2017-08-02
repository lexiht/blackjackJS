import { addPointBasedOnCards } from '../app/blackjack';

test('adds 11 points when A value and total < 21', () => {
  expect(addPointBasedOnCards(['A'])).toEqual(11);
});

test('adds 10 points when card value is J or K or Q', () => {
  expect(addPointBasedOnCards(['J'])).toEqual(10);
  expect(addPointBasedOnCards(['Q'])).toEqual(10);
  expect(addPointBasedOnCards(['K'])).toEqual(10);
});

test('adds points to normal card value', () => {
  expect(addPointBasedOnCards([3])).toEqual(3);
});

test('adds points to normal card value', () => {
  expect(addPointBasedOnCards([3, 5])).toEqual(8);
});
