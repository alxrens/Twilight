const card = require("../models/animeclaim");


class BlackJack {
    static createDeck(){
        const cardTypes = ["Hearts", "Diamonds", "Clubs", "Spades"];
        const value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const deck = [];


        for(const cardType of cardTypes){
            for(const cardValue of value){
                deck.push({
                    cardType,
                    cardValue
                })
            }
        }
        
        return deck;
    }

    static shuffleDeck(deck){
        for (let i = deck.length -1; i > 0; i--) {
            const shuffled = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    static calculateHandValue(hand){
        let sum = 0;
        let aces = 0;

        for (const card of hand) {
            if (card.cardValue === "A") {
                aces++;
                sum += 11;
            } else if (card.cardValue === "J" || card.cardValue === "Q" || card.cardValue === "K") {
                sum += 10;
            } else {
                sum += parseInt(card.cardValue, 10);
            }
        }

        while(sum > 21 && aces > 0){
            sum -= 10;
            aces--;
        }

        return sum
    }

    static displayHand(hand, hideFirstCard = false){
        const display = hand.map((card, index) => (index === 0 && hideFirstCard ? '??' : `${card.value} of ${card.cardType}`))
        console.log(display.join(', '))
    }

    static isBlackJack(hand){
    return hand.length === 2 && BlackJack.calculateHandValue(hand) === 21;
    }


    static playBlackJack(){
        const deck = this.createDeck();
        this.shuffleDeck(deck);

        const playerHand = [];
        const dealerHand = [];

        this.displayHand(playerHand);
        this.displayHand(dealerHand);


        if(this.isBlackJack(playerHand)) {
            console.log("Player has blackjack!");
            return;
        }

        while (this.calculateHandValue(playerHand) < 21) {
            const hitOrStand = prompt('Do you want to hit or stand? ').toLowerCase();
        
            if (hitOrStand === 'hit') {
              playerHand.push(deck.pop());
              console.log('\nYour hand: ');
              displayHand(playerHand);
        
              if (calculateHandValue(playerHand) === 21) {
                console.log('\nCongratulations! You have 21!');
                break;
              }
            } else if (hitOrStand === 'stand') {
              break;
            } else {
              console.log('Invalid input. Please enter "hit" or "stand".');
            }

              // Dealer's turn
            console.log('\nDealer\'s turn: ');
            while (calculateHandValue(dealerHand) < 17) {
            dealerHand.push(deck.pop());
            }
            this.displayHand(dealerHand)
          }

          const playerScore = this.calculateHandValue(playerHand);
          const dealerScore = this.calculateHandValue(dealerHand);


          if (playerScore >21) {
            console.log('You bust! The dealer wins.');
          } else if(dealerScore > 21) {
            console.log('Dealer busts! You win!');
          }else if (playerScore > dealerScore) {
            console.log('You win!');
          }else if (playerScore < dealerScore) {
            console.log('Dealer win');
          }else {
            console.log ("It's a tie")
          }


    }
}


module.exports = BlackJack;