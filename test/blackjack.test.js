import { addPointBasedOnCards, calculateTotal, checkForEarlyFinish } from '../app/blackjack';

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

test('2 cards of A should only add 11 points once, the rest is 1 point', () => {
  expect(calculateTotal(['DA', 'CA'])).toEqual(12);
});

test('3 cards of A should only add 11 points once, the rest is 1 point', () => {
  expect(calculateTotal(['DA', 'CA', 'SA'])).toEqual(13);
});

test('calculates the total of all cards', () => {
  expect(calculateTotal(['DA', 'H2', 'CA', 'SK'])).toEqual(14);
});

test('returns message when human total > 21', () => {
  let humanTotal = 22;
  let computerTotal = 18;
  expect(checkForEarlyFinish(humanTotal, computerTotal)).toEqual('Sorry, you busted.');
});

test('returns message when computer total > 21', () => {
  let humanTotal = 18;
  let computerTotal = 22;
  expect(checkForEarlyFinish(humanTotal, computerTotal)).toEqual('Congrats! You have won, the computer busted.');
});

test('returns message when computer total === 21', () => {
  let humanTotal = 18;
  let computerTotal = 21;
  expect(checkForEarlyFinish(humanTotal, computerTotal)).toEqual('Sorry, the computer have won.');
});

test('returns message when human total === 21', () => {
  let humanTotal = 21;
  let computerTotal = 18;
  expect(checkForEarlyFinish(humanTotal, computerTotal)).toEqual('Congrats! You have won.');
});


test('returns undefined when human or computer is not >= 21', () => {
  let humanTotal = 19;
  let computerTotal = 18;
  expect(checkForEarlyFinish(humanTotal, computerTotal)).toEqual(undefined);
});
