/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blackjack__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deck__ = __webpack_require__(4);





$(document).ready(() => {
  let human = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]('human');
  let computer = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]('computer');
  let cards = Object(__WEBPACK_IMPORTED_MODULE_3__deck__["c" /* shuffle */])(Object.keys(Object(__WEBPACK_IMPORTED_MODULE_3__deck__["b" /* populateCards */])()));

  $("#start").click(() => {
    $("#start").hide();
    __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */].start(human, computer, cards);
    $("h4").show();
    __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */].showAllCards(human.hand, human.id);
    __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */].showCardsExceptLastCards(computer.hand, computer.id);
    human.total = Object(__WEBPACK_IMPORTED_MODULE_1__blackjack__["a" /* calculateTotal */])(human.hand);
    $("#score").append(`Your current total is ${human.total}`);
    if (human.total < 21) {
      $("#buttons").show();
    }
    computer.total = Object(__WEBPACK_IMPORTED_MODULE_1__blackjack__["a" /* calculateTotal */])(computer.hand);
    __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */].isGameOver(human, computer);
  });

  $("#hit").click(() => {
    __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */].hit(human.hand, cards);
    __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */].showAllCards(human.hand, human.id);
    human.total = Object(__WEBPACK_IMPORTED_MODULE_1__blackjack__["a" /* calculateTotal */])(human.hand);
    $("#score").empty().append(`Your current total is ${human.total}`);
    __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */].isGameOver(human, computer);
  });
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blackjack__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deck__ = __webpack_require__(4);
// this module holds the interaction between players and the game




const game = {
  start: (human, computer, cards) => {
    for (let i = 0; i < 2; i++) {
      human.hand.push(Object(__WEBPACK_IMPORTED_MODULE_1__deck__["a" /* deal */])(cards));
      computer.hand.push(Object(__WEBPACK_IMPORTED_MODULE_1__deck__["a" /* deal */])(cards));
    }
  },
  showAllCards: (playerHand, id) => {
    $(`#${id}`).append("<li></li>");

    for (let i = 0; i < playerHand.length; i++) {
      let card = playerHand[i];
      $(`#${id} li`).append(`<img id=\"${card}\" />`);
      $(`#${card}`).attr("src", Object(__WEBPACK_IMPORTED_MODULE_1__deck__["b" /* populateCards */])()[card]);
    }
  },
  showCardsExceptLastCards: (computerHand, id) => {
    $(`#${id}`).append("<li></li>");

    for (let i = 0; i < computerHand.length; i++) {
      let card = computerHand[i];
      $(`#${id} li`).append(`<img id=\"${card}\" />`);
      if (i === (computerHand.length - 1)) {
        $(`#${card}`).attr("src", "./cards/cover.jpg");
      } else {
        $(`#${card}`).attr("src", Object(__WEBPACK_IMPORTED_MODULE_1__deck__["b" /* populateCards */])()[card]);
      }
    }
  },
  hit: (playerHand, cards) => {
    playerHand.push(Object(__WEBPACK_IMPORTED_MODULE_1__deck__["a" /* deal */])(cards));
  },
  isGameOver(human, computer) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__blackjack__["b" /* checkForEarlyFinish */])(human.total, computer.total) !== undefined) {
      $("#announcement").append(Object(__WEBPACK_IMPORTED_MODULE_0__blackjack__["b" /* checkForEarlyFinish */])(human.total, computer.total));
      this.showAllCards(computer.hand, computer.id);
      $("#buttons").hide();
      return;
    }
    return false;
  },
};
/* harmony export (immutable) */ __webpack_exports__["a"] = game;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// this module holds logic that only applicable for blackjack game.

const addPointBasedOnCards = (values) => {
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
/* unused harmony export addPointBasedOnCards */


const calculateTotal = (cards) => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateTotal;


const checkForEarlyFinish = (humanTotal, computerTotal) => {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = checkForEarlyFinish;


const gameoverAnnouncement = (humanTotal, computerTotal) => {
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
/* unused harmony export gameoverAnnouncement */



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* this class is created based on the assumption that dealer is
  the computer, the player is playing against with. They're all
  player at the end of the day and holds the same state.
*/

class Player {
  constructor(props){
    this.id = props;
    this.hand = [];
    this.total = 0;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* this module holds functions for creating and shuffling a deck of
  cards and can be reuse in any other 52 cards game, not just for blackjack.
*/

const populateCards = () => {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = populateCards;


const shuffle = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = shuffle;


const deal = (cards) => {
  return cards.pop();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = deal;



/***/ })
/******/ ]);