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
    human.total = calculateTotal(human.hand);
    $("#score").append(`Your current total is ${human.total}`);
    if (human.total < 21) {
      $("#buttons").show();
    }
    computer.total = calculateTotal(computer.hand);
    game.isGameOver(human, computer);
  });

  $("#hit").click(() => {
    game.hit(human.hand, cards);
    game.showAllCards(human.hand, human.id);
    human.total = calculateTotal(human.hand);
    $("#score").empty().append(`Your current total is ${human.total}`);
    game.isGameOver(human, computer);
  });

  $("#stick").click(() => {
    game.stick(human);
    $("#score").empty().append(`Your final total is ${human.total}`);
    $("#buttons").hide();
    game.showAllCards(computer.hand, computer.id);
    console.log(computer.total);
    game.computerHit(computer, cards);
    game.isGameOver(human, computer);
    game.finalResults(human, computer);
  });
});
