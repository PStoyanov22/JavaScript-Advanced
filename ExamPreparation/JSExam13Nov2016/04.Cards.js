function cardDeckBuilder(selector) {

    let Suits = {
        C: "\u2663", // ♣
        D: "\u2666", // ♦
        H: "\u2665", // ♥
        S: "\u2660" // ♠
    };

    let container = $(selector);

    function addCard(face, suit){
        let card = $(`<div class="card">${face} ${Suits[suit]}</div>`);
        card.on('click', function(){
            let list = container;
            let listItems = container.children('.card');
            list.append(listItems.get().reverse());
        });
        container.append(card)
    }

    return {
        addCard
    }

}