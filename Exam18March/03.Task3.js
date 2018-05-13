class PaymentProcessor{
    constructor(options){
        this.options = {types: [], precision: 2};
        if(options){
            if(options.hasOwnProperty('types')){
                this.options.types = options.types;
            }else{
                this.options.types = ["service", "product", "other"];

            }
            if(options.hasOwnProperty('precision')){
                this.options.precision = options.precision;
            }else{
                this.options.precision = 2;
            }

        }else{
            this.options = {types: '["service", "product", "other"]',
                precision: 2};
        }
        this.payments = [];
    }

    registerPayment(id, name, type, value){

        if(id === ''){
            throw new Error;
        }else if(name === ''){
            throw new Error;
        }else if(typeof value !== 'number'){
            throw new Error;
        }else if(!this.options.types.includes(type)){
            throw new Error('invalid type');
        }
        else{
            let doesExist = false;
            for (let obj of this.payments) {
                if(obj.id === id){
                    doesExist = true;
                    throw new Error;
                }
            }
            if(doesExist === false){
                this.payments.push({id, name, type, value})
            }


        }
    }

    deletePayment(id){

        if(this.payments.filter(p => p.id === id).length > 0){
            return this.payments = this.payments.filter(p => p.id !== id);
        }
        throw new Error;
    }
    get(id){
        let fixed = this.options.precision;

        for (let obj of this.payments) {
            if(obj.id === id){
                let details = `Details about payment ID: ${id}\n`;
                let name = `- Name: ${obj.name}\n`;
                let type = `- Type: ${obj.type}\n`;
                let val = `${obj.value}`;
                let value = `- Value: ${obj.value.toFixed(fixed)}`;

                return details + name + type + value;
            }
        }
        throw new Error;

    }
    setOptions(options){
        let setOption = options;
        if(options.hasOwnProperty('types')){
            this.options.types = setOption.types;
        }
        if(options.hasOwnProperty('precision')){
            this.options.precision = setOption.precision;
        }

    }
    toString(){
        let summary = 'Summary: \n';
        let payment = `- Payments: ${this.payments.length}\n`;

        let total = 0;
        for (let obj of this.payments) {
            total += obj.value;
        }
        let fixed = this.options.precision;
       let balance =  `- Balance: ${total.toFixed(fixed)}`;

        return summary + payment + balance
    }
}
// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());



generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 0);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 0);

// Should throw an error (ID not found)


generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
