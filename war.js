class Player {
  constructor() {
    this.hand = [];
    this.discard = [];
  }

  receiveCard(card) {
    this.hand.push(card);
  }

  receiveDiscard(cards) {
    this.discard.push(...cards);
  }

  drawCard() {
    return this.hand.shift();
  }

  score() {
    return this.discard.length;
  }
}

class Deck {
  constructor() {
    this.create();
  }

  create() {
    let suits = ['Diamonds', 'Clubs', 'Hearts','Spades'];
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    this.cards = [];
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < values.length; j++) {
        this.cards.push({ suit: suits[i], value: values[j], weight: j + 1 });
      }
    }
  }

  shuffle() {
    for(let i = 0; i < this.cards.length; i++) {
      let j = Math.floor(Math.random() * this.cards.length);
      let cardi = this.cards[i];
      let cardj = this.cards[j];
      this.cards[i] = cardj;
      this.cards[j] = cardi;
    }
  }

  drawCard() {
    return this.cards.shift();
  }
}

class WarGame {
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.deck = new Deck();
  }

  dealCards() {
    let i = 0;
    let card;

    this.deck.shuffle();

    while(card = this.deck.drawCard()) {
      if(i % 2 === 0) {
        this.player1.receiveCard(card);
      } else {
        this.player2.receiveCard(card);
      }
      i++;
    }
  }

  playRound() {
    const { winner, stack } = this.playWar();
    winner.receiveDiscard(stack);
  }

  playWar(stack = [], war = false) {
    let p1CardWeight, p2CardWeight, winner;
    let p1Stack = [];
    let p2Stack = [];
    let cardsToDraw = (war) ? 3 : 1;

    for(let i = 0; i < cardsToDraw; i++) {
      p1Stack.unshift(this.player1.drawCard());
      p2Stack.unshift(this.player2.drawCard());
    }

    stack = [...stack, ...p1Stack, ...p2Stack];

    p1CardWeight = p1Stack[0].weight;
    p2CardWeight = p2Stack[0].weight;

    if(p1CardWeight === p2CardWeight) {
      let war = this.playWar(stack, true);
      winner = war.winner;
      stack = war.stack;
    } else if(p1CardWeight > p2CardWeight) {
      winner = this.player1;
    } else {
      winner = this.player2;
    }

    return { winner, stack };
  }
}
