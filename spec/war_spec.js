describe('War', () => {
  let game;

  let cardsArray = (weights) => {
    return weights.map((w) => {
      return { weight: w };
    });
  }

  let cardsWeights = (cards) => {
    return cards.map((card) => {
      return card.weight;
    });
  }

  beforeEach(() => {
    game = new WarGame();
    game.dealCards();
  });

  describe('card dealing', () => {
    it('deals same amount of cards to both players', () => {
      expect(game.player1.hand.length).toEqual(26);
      expect(game.player2.hand.length).toEqual(26);
    });

    it('deals shuffled cards to both players', () => {
      let newGame = new WarGame();
      newGame.dealCards();
      expect(game.player1.hand).not.toEqual(newGame.player1.hand);
    });
  });

  describe('game play', () => {
    describe('when no card values matches', () => {
      beforeEach(() => {
        game.player1.hand = cardsArray([6, 3]);
        game.player2.hand = cardsArray([8, 5]);
        game.playRound();
      });

      it('draws top cards from both player decks', () => {
        expect(game.player1.hand).toEqual(cardsArray([3]));
        expect(game.player2.hand).toEqual(cardsArray([5]));
      });

      it('sends card to winning player discard deck', () => {
        expect(game.player1.discard).toEqual([]);
        expect(cardsWeights(game.player2.discard)).toEqual([6, 8]);
      });

      it('scores correctly', () => {
        expect(game.player1.score()).toEqual(0);
        expect(game.player2.score()).toEqual(2);
      });
    });

    describe('when cards have same value on same play', () => {
      beforeEach(() => {
        game.player1.hand = cardsArray([3, 4, 5, 6, 9]);
        game.player2.hand = cardsArray([3, 4, 5, 8, 9]);
        game.playRound();
      });

      it('draws next 3 cards and use last one for comparison', () => {
        expect(game.player1.discard).toEqual([]);
        expect(cardsWeights(game.player2.discard).sort()).toEqual([3, 4, 5, 6, 3, 4, 5, 8].sort());
      });

      it('scores correctly', () => {
        expect(game.player1.score()).toEqual(0);
        expect(game.player2.score()).toEqual(8);
      });
    });

    describe('when cards have same value multiple times on same play', () => {
      beforeEach(() => {
        game.player1.hand = cardsArray([1, 3, 4, 5, 6, 9, 5, 7]);
        game.player2.hand = cardsArray([2, 3, 4, 5, 6, 9, 5, 6]);
        game.playRound();
        game.playRound();
      });

      it('scores correctly', () => {
        expect(game.player1.score()).toEqual(14);
        expect(game.player2.score()).toEqual(2);
      });
    });
  });
});
