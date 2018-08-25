$(document).ready(function(){

  let hitButton = $("#hit-button");
  let standButton = $("#stand-button");

  hitButton.click(function() {
    // to do
  });

  standButton.click(function() {
    // to do
  })

});

class GameState {
  contstructor() {
    this.deck;
    this.dealerHand;
    this.playerHand;
    this.playerWins;
    this.playerGames;
  }
}

class Card {
  constructor() {
    this.suit;
    this.value;
    this.image;
  }
}

function calculateHandScore(hand) {
  // calculates the score of the hand, including aces etc
}

function 
