const CARD_SET = {
  suits: ['H', 'S', 'D', 'C'],
  ranks: [2, 3, 4, 5, 6, 7, 8, 9, 0, 'J', 'Q', 'K', 'Ace'],
}

class GameBoard {
  constructor(deck) {
    this.deck = deck;
    this.dealerHand;
    this.dealerScore = 0;
    this.playerHand;
    this.playerScore = 0;
    this.playerWins = 0;
    this.playerLosses = 0;
    this.playerGames = 0;
    this.roundFinished = true;
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

function hit(gameBoard, id) {
  if (gameBoard.roundFinished) {
    return 0;
  }

  gameBoard.playerHand.push(drawCards(gameBoard.deck, 1)[0]);
  gameBoard.playerScore = scoreHand(gameBoard.playerHand);
  if (hasPlayerLost(gameBoard)) {
    alertLoss(id);
    gameBoard.roundFinished = true;
    gameBoard.playerGames += 1;
    gameBoard.playerLosses += 1;
  }
  drawGameBoard(gameBoard, id);
}

function stand(gameBoard, id) {
  if (gameBoard.roundFinished) {
    return 0;
  }

  while (doesDealerHit(gameBoard.dealerHand)) {
    gameBoard.dealerHand.push(drawCards(gameBoard.deck, 1)[0]);
  }

  gameBoard.dealerScore = scoreHand(gameBoard.dealerHand);
  gameBoard.roundFinished = true;
  gameBoard.playerGames += 1;
  if (hasPlayerWon(gameBoard)) {
    alertWin(id);
    gameBoard.playerWins += 1;
  } else {
    alertLoss(id);
    gameBoard.playerLosses += 1;
  }
  drawGameBoard(gameBoard, id);
}

function newRound(gameBoard, id) {
  if (!gameBoard.roundFinished) {
    return 0;
  }

  if (gameBoard.deck.length < 52 * 5) {
    gameBoard.deck = createDeck(CARD_SET);
  }

  clearMessage(id);
  gameBoard.roundFinished = false;
  gameBoard.dealerHand = drawCards(gameBoard.deck, 1);
  gameBoard.playerHand = drawCards(gameBoard.deck, 2);
  gameBoard.playerScore = scoreHand(gameBoard.playerHand);
  gameBoard.dealerScore = scoreHand(gameBoard.dealerHand);
  drawGameBoard(gameBoard, id);
}

function alertLoss(id) {
  id.messageArea.addClass('alert-danger');
  id.messageArea.removeClass('invisible');
  id.messageArea.html("<b>You lose.</b> <em>Press 'New round' to play again.</em>")
}

function alertWin(id) {
  id.messageArea.addClass('alert-success');
  id.messageArea.removeClass('invisible');
  id.messageArea.html('<b>You win!</b> <em>Press "New round" to play again.</em>')
}

function alertNew(id) {
  id.messageArea.addClass('alert-secondary');
  id.messageArea.removeClass('invisible');
  id.messageArea.html('<b>Welcome!</b> <em>Press "New round" to play.</em>')
}

function clearMessage(id) {
  id.messageArea.removeClass('alert-secondary alert-success alert-danger');
  id.messageArea.addClass('invisible');
}

function hasPlayerLost(gameBoard) {
  if (gameBoard.playerScore.score > 21) {
    return true;
  }
  return false;
}

function hasPlayerWon(gameBoard) {
  if (gameBoard.playerScore.score === 21
    && gameBoard.playerHand.length === 2
    && gameBoard.dealerScore.score !== 21
    && gameBoard.dealerHand.length !== 2) {
    return true;
  } else if (gameBoard.playerScore.score > gameBoard.dealerScore.score 
    && gameBoard.playerScore.score <= 21) {
    return true;
  } else if (gameBoard.playerScore.score <= 21
    && gameBoard.dealerScore.score > 21) {
    return true;
  } else {
    return false;
  }
}

function drawGameBoard(gameBoard, id) {
  id.cardsLeft.text(gameBoard.deck.length);
  id.dealerCards.empty();
  for (let card of gameBoard.dealerHand) {
    id.dealerCards.append('<img src="' + card.image + '" width = "120" class="shadow">');
  }
  id.playerCards.empty();
  for (let card of gameBoard.playerHand) {
    id.playerCards.append('<img src="' + card.image + '" width = "120" class="shadow">');
  }
  id.playerScore.text(gameBoard.playerScore.score);
  id.dealerScore.text(gameBoard.dealerScore.score);
  id.gamesWon.text(gameBoard.playerWins);
  id.gamesLost.text(gameBoard.playerLosses);
  id.gamesPlayed.text(gameBoard.playerGames);
}

function initializeNewGameBoard() {
  let deck = createDeck(CARD_SET);
  shuffleDeck(deck);
  return new GameBoard(deck);
}

function doesDealerHit(dealerHand) {
  let handScore = scoreHand(dealerHand);
  return handScore.score < 17 || (handScore.score === 17 && handScore.soft === true);
}

function scoreHand(hand) {
  let nonAcesScore = 0;
  let acesInHand = 0;
  let acesScore = 0;

  for (let card of hand) {
    if (card.rank === 'Ace') {
      acesInHand += 1;
    } else if ('0JQK'.indexOf(card.rank) !== -1) {
      nonAcesScore += 10;
    } else {
      nonAcesScore += Number(card.rank);
    }
  }

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
        let cardString = String(rank) + String(suit);
        let image = 'img/' + String(cardString) + '.png';
        deck.push(new Card(String(rank), String(suit), cardString, image));
      }
    }
  }
  return deck;
}
