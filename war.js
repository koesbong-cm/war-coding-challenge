var deck = [];
var suits = ['Diamonds', 'Clubs', 'Hearts','Spades'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var player1Hand = [];
var player2Hand = [];
var player1Discard = [];
var player2Discard = [];

function createDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      deck.push({
        suit: suits[i],
        value: values[j],
        weight: j + 1,
        toString: function() {
          return this.value + ' of ' + this.suit;
        }
      })
    }
  }
}

function shuffleDeck() {
  var copy = [];
  var n = deck.length;
  var i;

  while (n) {
    i = Math.floor(Math.random() * deck.length);

    if (i in deck) {
      copy.push(deck[i]);
      delete deck[i];
      n--;
    }
  }

  deck = copy.slice();
  return deck;
}

function drawCard() {
  return deck.shift();
}

function dealCards() {
  for (var i = 0, j = deck.length; i < j; i++) {
    var card = drawCard();

    if (i % 2 === 0) {
      player1Hand.unshift(card);
    } else {
      player2Hand.unshift(card);
    }
  }
}

function getPlayer1Score() {
  return player1Discard.length;
}

function getPlayer2Score() {
  return player2Discard.length;
}

function playCard() {
  var p1Card = player1Hand.shift();
  var p2Card = player2Hand.shift();

  if (p1Card.weight > p2Card.weight){
    player1Discard.push(p1Card);
    player1Discard.push(p2Card);
  } else {
    player2Discard.push(p1Card);
    player2Discard.push(p2Card);
  }
}
