function printDeckOfCards(cards) {

    function makeCards(face, suit){
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
        if (validFaces.indexOf(face) < 0)
            throw new Error("Invalid card face: " + face);
        if (validSuits.indexOf(suit) < 0)
            throw new Error("Invalid card suit: " + suit);
        let card = {
            face: face,
            suit: {
                'S': "\u2660",
                'H': "\u2665",
                'D': "\u2666",
                'C': "\u2663",
            },
            toString: () => {
                return card.face + card.suit[suit];
            }
        };
        return card;
    }



    let deck = [];
    for (let cardStr of cards) {
        let face = cardStr.substring(0, cardStr.length - 1);
        let suit = cardStr.substr(cardStr.length - 1, 1);
        try {
            deck.push(makeCards(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + cardStr);
            return;
        }
    }
    console.log(deck.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);


// A♠ 10♦ K♥ 2♣


printDeckOfCards(['5S', '3D', 'QD', '1C']);


// Invalid card: 1C


printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']);


// Invalid card: 5X


