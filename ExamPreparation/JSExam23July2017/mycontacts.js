class Contact {
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
    }

    get online(){
        return this._online;
    }
    set online(value){
        if(value === 'true'){
            this.element.find('.title').addClass('online');
        }else{
            this.element.find('.title').removeClass('online');

        }
        this._online = value;

    }

    render(id){
        let container = $(`#${id}`);
        container.append(this.element);
    }

    createElement(){
        let article = $('<article>');
        let div = $('<div>')
            .addClass('title')
            .text(`${this.firstName} ${this.lastName}`);
        let button = $('<button>').html('&#8505;');
        let divInfo = $('<div>')
            .addClass('info')
            .css("display","none");
        let span1 = $(`<span>&phone; ${this.phone}</span>`);
        let span2 = $(`<span>&#9993; ${this.email}</span>`);
        divInfo.append(span1).append(span2);
        button.on('click', function () {
            divInfo.toggle();
        });
        div.append(button);
        article.append(div).append(divInfo);
        return article;
    }
}