function makeCard(face, suit) {
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
console.log('' + makeCard('A', 'S')); // A♠


console.log('' + makeCard('10', 'H')); // 10♥


console.log('' + makeCard('2', 'D')); // 2♦



console.log('' + makeCard('1', 'C')); // Error

console.log('' + makeCard('4', 'W')); // Error