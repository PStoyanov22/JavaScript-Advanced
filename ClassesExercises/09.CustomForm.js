let result = (function() {

    class Textbox{
        constructor(selector, regex){
            this._elements = $(selector);
            this.value = $(this._elements[0]).val();
            this.invalidSymbols = regex;
            this.onInput();

        }

        onInput(){
            this._elements.on('input', (event) => {
                let text = $(event.target).val();
                this._value = text;
                for (let el of this._elements) {
                    $(el).val(text);
                }
            })
        }

        get value(){
            return this._value;
        }
        set value(value){
            this._value = value;
            for (let el of this._elements) {
                $(el).val(value);
            }
        }
        get elements(){
            return this._elements;
        }
        isValid(){
            return !this.invalidSymbols.test(this._value)
        }
    }
    class Form {
        constructor(){
            this._element = $('<div>').addClass('form');
            this.textBoxElements = arguments;
        }

        get textBoxElements(){
            return this._textBoxElements;
        }
        set textBoxElements(args){
            for (let arg of args) {
                if(!arg instanceof Textbox){
                    throw new TypeError;
                }
            }
            this._textBoxElements = args;
            for (let textbox of this._textBoxElements) {
                for (let el of textbox._elements) {
                    this._element.append($(el));
                }

            }
        }

        submit(){
            let allIsValid = true;
            for (let textbox of this._textBoxElements) {
                if(textbox.isValid()){
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid green');
                    }
                }else{
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid red');
                    }
                    allIsValid = false;
                }
            }
            return allIsValid;
        }

        attach(selector){
            $(selector).append(this._element);
        }

    }

    return {
        Textbox,
        Form
    }
}())


let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");