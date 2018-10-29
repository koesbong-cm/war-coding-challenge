# War Coding Challenge

In this repository, you will find the code to play the game of War, as well as a test suite that validates the current functionalities. 

If you have never played War before, the rules are simple:

1. The objective of the game is to win all cards
2. It is typically played by two players
3. It uses a standard playing card deck in decreasing order is: A K Q J 10 9 8 7 6 5 4 3 2. Aces are high and suits are ignored
4. The deck is evenly divided between the players, giving each player a stack of 26 cards
5. During the game play, both players play the top card of their deck at the same time
6. The player with the higher card takes both of the cards played and moves them to their discard stack
7. If the two cards played are of equal value, then there is a "war"

There are a couple of required tasks for you to do here:

* We think that the code in `war.js` can be made cleaner, we'd love to see how you would refactor it
* The current code doesn't have the "war" functionality yet, where the two cards played are of equal value. Please add the following requirement: 
  - In this scenario, both players will pick up 3 more cards from the top of their deck 
  - The players compare the third card they picked up and whoever has the higher card value takes all 8 cards
  - If the cards are still of the same value, repeat these steps

Bonus tasks if time allows:

* Suggest/Add new product improvements
* Improve the test suites

For these tasks, we would like for you to timebox your effort to 2 hours at the most.
