const CARD_SET = {
  suits: ['H', 'S', 'D', 'C'],
  ranks: [2, 3, 4, 5, 6, 7, 8, 9, 0, 'J', 'Q', 'K', 'A'],
}

class GameBoard {
  contstructor() {
    this.deck;
    this.dealerHand;
    this.playerHand;
    this.playerWins = 0;
    this.playerGame = 0;
  }
}

class Card {
  constructor(rank, suit, cardString, image) {
    this.rank = rank;
    this.suit = suit;
    this.cardString = cardString;
    this.image = image;
  }
}

function drawGameState(gameBoard) {
  // draws the game state to the DOM
  // returns 0 if completed successfully
  // clear
}

function initializeGame() {
  // initializes the game
  // returns a new GameState Object
}

function doesDealerHit(dealerHand) {
  let handScore = scoreHand(dealerHand);
  return handScore.score < 17 || (handScore.score === 17 && handScore.soft === true);
}

function scoreHand(hand) {
  let nonAcesScore = 0;
  let acesInHand = 0;
  let acesScore = 0;

  // compute the score of non-ace cards only
  for (let card of hand) {
    if (card.rank === 'A') {
      acesInHand += 1;
    } else if ('0JQK'.indexOf(card.rank) !== -1) {
      nonAcesScore += 10;
    } else {
      nonAcesScore += Number(card.rank);
    }
  }

  // determine the score of aces separately
  let highAces = 0;
  let lowAces = acesInHand;
  for (let i = acesInHand; i > 0; i--) {
    if (i * 11 + (acesInHand - i) * 1 + nonAcesScore <= 21) {
      highAces = i;
      lowAces = acesInHand - 1;
      break;
    }
  }
  acesScore = (highAces * 11) + (lowAces * 1);

  return {
    score: acesScore + nonAcesScore,
    soft: acesInHand > 0
  }
}

function drawCards(deck, numberOfCards) {
  let drawnCards = [];
  for (let i = 0; i < numberOfCards; i++) {
    drawnCards.push(deck.shift());
  }
  return drawnCards;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function createDeck(cardSet) {
  let deck = [];
  for (let i = 0; i < 6; i++) {
    for (let suit of cardSet.suits) {
      for (let rank of cardSet.ranks) {
        let cardString = String(rank) + suit;
        let image = 'img/' + cardString + '.png';
        deck.push(new Card(String(rank), String(suit), cardString, image));
      }
    }
  }
  return deck;
}

function assert(expectedBehavior, desiredBehavior) {
  if (!expectedBehavior) {
    console.log('FAILED, ' + desiredBehavior);
  } else {
    console.log('passed');
  }
}

// tests
console.log('--- double-check assert function and length of deck ---');
assert(1 === 1, 'should correctly pass the test')
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
