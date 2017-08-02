// this module holds the interaction between players and the game

import { addPointBasedOnCards, calculateTotal, checkForEarlyFinish, gameoverAnnouncement } from './blackjack';
import { populateCards, shuffle, deal } from './deck';

export const game = {
  start: (human, computer, cards) => {
    for (let i = 0; i < 2; i++) {
      human.hand.push(deal(cards));
      computer.hand.push(deal(cards));
    }
  },
  showAllCards: (playerHand, id) => {
    $(`#${id}`).append("<li></li>");

    for (let i = 0; i < playerHand.length; i++) {
      let card = playerHand[i];
      $(`#${id} li`).append(`<img id=\"${card}\" />`);
      $(`#${card}`).attr("src", populateCards()[card]);
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
        $(`#${card}`).attr("src", populateCards()[card]);
      }
    }
  },
  hit: (playerHand, cards) => {
    playerHand.push(deal(cards));
  },
  isGameOver(human, computer) {
    if (checkForEarlyFinish(human.total, computer.total) !== undefined) {
      $("#announcement").append(checkForEarlyFinish(human.total, computer.total));
      this.showAllCards(computer.hand, computer.id);
      $("#buttons").hide();
      return;
    }
    return false;
  },
};
