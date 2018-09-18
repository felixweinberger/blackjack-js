/** 
 * Tests
 */

function assert(actualBehavior, expectedBehavior) {
  if (!actualBehavior) {
    console.log('FAILED [' + expectedBehavior + ']');
  } else {
    console.log('passed');
  }
}

console.log('--- double-check assert function and length of deck ---');
assert(1 === 1, 'should correctly pass the test');
let orderedDeck = createDeck(CARD_SET);
let shuffledDeck = createDeck(CARD_SET);
shuffleDeck(shuffledDeck);
assert(orderedDeck.length === 312, 'blackjack deck should have 312 cards');

console.log('\n--- draw card from ordered deck ---');
let hand = drawCards(orderedDeck, 2);
assert(hand.length === 2, 'should draw two cards from the deck');
console.log(hand);

console.log('\n--- draw card from shuffled deck ---');
hand = drawCards(shuffledDeck, 2);
console.log(hand);
console.log(scoreHand(hand));

console.log('\n--- does the dealer hit? ---');
console.log(doesDealerHit(hand));

console.log('\n--- initializing the gameBoard ---');
let gameBoard = initializeNewGameBoard();
console.log(gameBoard);
