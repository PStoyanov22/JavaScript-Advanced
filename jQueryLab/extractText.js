function extractText(){
    let result = [];
    let items = $('ul#items li').toArray().map(e => result.push(e.textContent));

    $('#result').text(result.join(', '));
}