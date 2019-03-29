$(document).ready(function() {
  let gameBoard = initializeNewGameBoard();
  let id = {
    hitButton: $('#hit-button'),
    standButton: $('#stand-button'),
    newButton: $('#new-button'),
    dealerCards: $('#dealer-cards'),
    playerCards: $('#player-cards'),
    dealerScore: $('#dealer-score'),
    playerScore: $('#player-score'),
    gamesPlayed: $('#games-played'),
    gamesWon: $('#games-won'),
    gamesLost: $('#games-lost'),
    cardsLeft: $('#cards-left'),
    messageArea: $('#message-area')
  };

  alertNew(id);

  id.newButton.click(function() {
    newRound(gameBoard, id);
  });

  id.hitButton.click(function() {
    hit(gameBoard, id);
  });

  id.standButton.click(function() {
    stand(gameBoard, id);
  });
});
