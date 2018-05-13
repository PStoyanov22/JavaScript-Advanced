class TitleBar {
    constructor(title){
        this.title = title;
        this.list = [];
    }

    addLink(href, name){

        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);

        this.list.push(link);
    }

    appendTo(selector){
        let header = $('<header>').addClass('header');
        let headerDiv = $('<div>').addClass('header-row');
        let drawer = $('<div>').addClass('drawer');
        let button = $('<a>').addClass('button').html('&#9776;');
        button.on('click', function(){
            $('div.drawer').toggle();
        });
        let span = $('<span>').addClass('title').text(this.title);
        let navMenu = $('<nav>').addClass('menu');


        header.append(headerDiv);
        headerDiv.append(button);
        button.append(span);
        header.append(drawer);
        drawer.append(navMenu);
        this.list.forEach(link => navMenu.append(link));

       $(selector).append(header);
    }
}

let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');