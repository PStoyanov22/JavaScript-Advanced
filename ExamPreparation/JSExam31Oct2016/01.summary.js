function generateSummary(selector){
    $(selector).on('click', function () {
        let highlightedText = $('#content strong').text();
        let summary = $('<div>').attr('id', 'summary');
        let header = $('<h2>').text('Summary');
        let text = $('<p>').text(highlightedText);
        let parent = $('#content').parent();

        summary.append(header).append(text);

        parent.append(summary);
    })
}