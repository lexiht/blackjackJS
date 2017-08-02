// this module holds the interaction between players and the game

import { addPointBasedOnCards, calculateTotal, checkForEarlyFinish, gameoverAnnouncement } from './blackjack';
import { populateCards, shuffle, deal } from './deck';

export const game = {
  hasStick: false,
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
  stick(human, hasStick) {
    human.total = calculateTotal(human.hand);
    this.hasStick = true;
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
  computerHit(computer, cards) {
    if (computer.total < 18 && this.hasStick) {
      this.hit(computer.hand, cards);
      computer.total = calculateTotal(computer.hand);
      console.log(computer.total);
    }
    this.showCardsExceptLastCards(computer.hand, computer.id);
  },
  finalResults(human, computer) {
    computer.total = calculateTotal(computer.hand);
    human.total = calculateTotal(human.hand);
    $("#announcement").append(gameoverAnnouncement(human.total, computer.total));
    this.showAllCards(computer.hand, computer.id);
  }
};
