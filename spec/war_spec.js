describe('War', function() {
  var currentDeck;

  it('should be able to create a new deck', function() {
    createDeck();
    
    expect(deck.length).toEqual(52);
  });

  it('should be able to shuffle a deck', function() {
    currentDeck = deck.slice();
    shuffleDeck();
    expect(deck[0].toString()).not.toEqual(currentDeck[0].toString());

    currentDeck = deck.slice();
    shuffleDeck();
    shuffleDeck();
    expect(deck[0].toString()).not.toEqual(currentDeck[0].toString());
  });

  it('should be able to draw a card', function () {
    drawCard();
    expect(deck.length).toEqual(51);

    drawCard();
    expect(deck.length).toEqual(50);
  });

  it('should be able to deal cards to 2 players', function() {
    deck = currentDeck.slice();
    dealCards();

    expect(player1Hand.length).toEqual(26);
    expect(player2Hand.length).toEqual(26);
    expect(deck.length).toEqual(0);
  });

  it('should be able to perform game play', function() {
    // reset player 1 and player 2 hands
    player1Hand = [
      {
        suit: 'Hearts',
        value: 'Ace',
        weight: 13
      }
    ];

    player2Hand = [
      {
        suit: 'Clubs',
        value: '8',
        weight: 7
      }
    ];

    playCard();

    expect(player1Discard.length).toEqual(2);
    expect(player2Discard.length).toEqual(0);
  });

  it('should be able to show player scores', function() {
    expect(getPlayer1Score()).toEqual(2);
    expect(getPlayer2Score()).toEqual(0);
  })
});
