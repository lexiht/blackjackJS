import { game } from './game';
import { addPointBasedOnCards, calculateTotal, checkForEarlyFinish, gameoverAnnouncement } from './blackjack';
import { Player } from './player';
import { populateCards, shuffle, deal } from './deck';

$(document).ready(() => {
  let human = new Player('human');
  let computer = new Player('computer');
  let cards = shuffle(Object.keys(populateCards()));

  $("#start").click(() => {
    $("#start").hide();
    game.start(human, computer, cards);
    $("h4").show();
    game.showAllCards(human.hand, human.id);
    game.showCardsExceptLastCards(computer.hand, computer.id);
  });
});
