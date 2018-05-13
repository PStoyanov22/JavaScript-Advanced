function createBook(selector, title, author, isbn){
    let bookGenerator = (function (){
        let id = 1;

        return function (selector, title, author, isbn){

            selector = $(selector);

            let bookId = $(`<div>`);
            bookId.attr('id', `book${id}`);
            bookId.css('border', 'none');

            title = $(`<p class="title">${title}</p>`);
            author = $(`<p class="author">${author}</p>`);
            isbn = $(`<p class="isbn">${isbn}</p>`);
            let selectBtn = $('<button>Select</button>');
            let deselectBtn = $('<button>Deselect</button>');

            selectBtn.on('click', function(){
               bookId.css("border", '2px solid blue');
            });
            deselectBtn.on('click', function (){
                bookId.css("border", 'none');
            });


            title.appendTo(bookId);
            author.appendTo(bookId);
            isbn.appendTo(bookId);
            selectBtn.appendTo(bookId);
            deselectBtn.appendTo(bookId);

            selector.append(bookId);

            id++;

        }


    })();

    bookGenerator(selector, title, author, isbn);


}
