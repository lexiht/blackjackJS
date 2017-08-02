# Blackjack Game
The game follows a simple set of rules:
* There is a standard set of 52 cards. When the game starts, the player is given 2 random cards and the
dealer is given one which the player can see.
* Each numbered card has its face value, the ace can be
either 1 or 11 and picture cards are worth 10 points.
* The player is given the following 2 options: ‘hit’ or ‘stick’.
* The player can hit or stick until they are either happy with the sum of the values of their cards or until the
total of their cards add up to 21 or over. If their hand is over 21, they lose. Otherwise, if they stick, the
dealer will then start drawing cards until they either have a closer total to 21. If the dealer goes over then
the player wins.

## Approach
* The game is running from `index.js` with the game logics being allocated in 4 other separated files.
1. `blackjack.js` - this module holds logic that only applicable for blackjack game.
2. `deck.js` - this module holds functions for creating and shuffling a deck of cards and can be reuse in any other 52 cards game, not just for blackjack.
3. `player.js` - this class is created based on the assumption that the dealer is the computer, the player is playing against with. They're all players at the end of the day and holds the same state.
4. `game.js` - this module holds the interaction between players and the game.
* I started off writing tests first but I was concerned about not meeting the time constraint. So I continue with implementation code instead.

## To do for next time
* Write more test to cover other edge cases.
* The styling right now is pretty basic. It's crying out for more proper styling.

## Instructions
1. run `npm install`
2. make sure you have webpack globally `npm i -g webpack`
3. run `webpack --watch`
4. to see test, run `npm test`
5. Open `index.html` in your browser
