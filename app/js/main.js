$(document).ready(function(){

  let hitButton = $("#hit-button");
  let standButton = $("#stand-button");

  // prepare the game...
  //    initialise a game state
  //    create the deck from the cardSet
  //    shuffle the deck

  // session loop...
    // draw two cards for the dealer
    // draw two cards for the player

    // draw the game state to the DOM
    // show the first dealer card
    // show the player hand

    // game loop...

      // draw the current game state to the html

      // listen for hit or stand
      // if hit...
      //    draw a card from the deck
      hitButton.click(function() {
        // to do
        // draw a card from the top of the deck
        // attach the card image to the player area
      });

      // if stand...
      //    complete the dealer draw
      standButton.click(function() {
        // to do
      })

      // if dealer has blackjack...
      //    increase played by 1
      //    clear game state and break out of loop

      // if player has blackjack...
      //    increase played by 1
      //    increase won by 1
      //    clear game state and break out of loop

      // if dealer wins...
      //    increase played by 1
      //    clear game state and break out of loop

      // if player wins...
      //    increase played by 1
      //    increase won by 1
      //    clear game state and break out of loop 

});
