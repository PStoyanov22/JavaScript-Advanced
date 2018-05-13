function wikiParser(selector) {
    let text = $(selector).text();

    let hOneRegex = /=(?!=)(.+?)=/g;
    let hTwoRegex = /==(?!=)(.+?)==/g;
    let hThreeRegex = /===(?!=)(.+?)===/g;

    let boldRegex = /'''(.+?)'''/g;
    let italicsRegex = /''(.+?)''/g;

    let hyperLinkOne = /\[\[([^|\[\]]+?)]]/g;
    let hyperLinkTwo = /\[\[([^\[\]]+?)\|([^\[\]]+?)]]/g;

    let formattedText = text.replace(hThreeRegex, (m, g) => `<h3>${g}</h3>`)
        .replace(hTwoRegex, (m, g) => `<h2>${g}</h2>`)
        .replace(hOneRegex, (m, g) => `<h1>${g}</h1>`)


        .replace(boldRegex, (m, g) => `<b>${g}</b>`)
        .replace(italicsRegex, (m, g) => `<i>${g}</i>`)
        .replace(hyperLinkTwo, (m, g1, g2) => `<a href="/wiki/${g1}">${g2}</a>`)
        .replace(hyperLinkOne, (m, g) => `<a href="/wiki/${g}">${g}</a>`);


    $(selector).html(formattedText);
}
