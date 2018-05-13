class Dialog{
    constructor(message, callback){
        this.message = message;
        this.callback = callback;
        this.element = '';
        this.inputs = [];
    }
    addInput(label, name, type){
        this.inputs.push({label, name, type});
    }

    render(){
        this.element = $('<div class="overlay">');
        let divDialog = $('<div class=dialog>');
        let par = $(`<p>${this.message}<p>`);
        divDialog.append(par);

        for (let input of this.inputs) {
            let label = $(`<label>${input.label}</label>`);
            let inputField = $(`<input name='${input.name}' type='${input.type}'>`);
            divDialog.append(label);
            divDialog.append(inputField);
        }
        divDialog.append($('<button>OK</button>').click(() => {
            let obj = {};
            let inputs  = this.element.find('input').toArray();
            inputs.forEach(i => obj[$(i).attr('name')] = $(i).val());
            this.callback(obj);
            this.element.remove();
        }));
        divDialog.append($('<button>Cancel</button>').click(() => {
            this.element.remove();
        }));
        this.element.append(divDialog);
        $('body').append($(this.element));
    }


}

