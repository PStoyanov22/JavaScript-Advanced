let expect = require('chai').expect;

let jsdom = require('jsdom-global')();
let $ = require('jquery');


document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('Shared object properties', function () {
    describe('name and income empty tests', function () {
        it('should return undefined name equals null', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('should return undefined if income null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('changeName tests', function () {
        it('should return null with a non value name', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal(null);
        });
        it('should change with a string name', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', 'change');
        });
        it('should not change with a non value name and preexisting name', function () {
            sharedObject.name = 'Pesho';
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('Pesho', 'does not change');
        });

        describe('textBox name', function () {
            it('should return name with a non value name', function () {
                let textName = $('#name');
                sharedObject.changeName('');
                expect(textName.val()).to.be.equal('Pesho', 'does not change');
            });
            it('should change with a string name', function () {
                let textName = $('#name');
                sharedObject.changeName('Gosho');
                expect(textName.val()).to.be.equal('Gosho', 'change');
            });
        })
    });


    describe('changeIncome tests', function () {
        it('should return null with a not a number income', function () {
            sharedObject.changeIncome('pesho');
            expect(sharedObject.income).to.be.equal(null, 'does not change');
        });
        it('should return null with a not a number income', function () {
            sharedObject.changeIncome('{}');
            expect(sharedObject.income).to.be.equal(null, 'does not change');
        });
        it('should not change with a string name and preexisting value', function () {
            sharedObject.income = 5;
            sharedObject.changeIncome('Pesho');
            expect(sharedObject.income).to.be.equal(5, 'not change');
        });
        it('should not change with a floating-point number', function () {
            sharedObject.income = 5;
            sharedObject.changeIncome(3.3);
            expect(sharedObject.income).to.be.equal(5, 'does not change');
        });
        it('should not change with a negative number', function () {
            sharedObject.income = 5;
            sharedObject.changeIncome(-3);
            expect(sharedObject.income).to.be.equal(5, 'does not change');
        });
        it('should not change with a 0', function () {
            sharedObject.income = 5;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5, 'does not change');
        });
        it('should change with a number', function () {
            sharedObject.income = 5;
            sharedObject.changeIncome(2);
            expect(sharedObject.income).to.be.equal(2, 'does change');
        });


        describe('textBox income', function () {
            it('Pass object inside should not change income', function () {
                sharedObject.changeIncome(10);
                let incomeTxt = $('#income');
                sharedObject.changeIncome({});
                expect(incomeTxt.val()).to.be.equal('10');
            });
            it('Pass string inside should not change income', function () {
                sharedObject.changeIncome(10);
                let incomeTxt = $('#income');
                sharedObject.changeIncome('pesho');
                expect(incomeTxt.val()).to.be.equal('10');
            });
            it('Pass negative inside should not change income', function () {
                sharedObject.changeIncome(10);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(-34);
                expect(incomeTxt.val()).to.be.equal('10');
            });
            it('Pass zero inside should not change income', function () {
                sharedObject.changeIncome(10);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(0);
                expect(incomeTxt.val()).to.be.equal('10');
            });
            it('Pass floating inside should not change income', function () {
                sharedObject.changeIncome(10);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(5.5);
                expect(incomeTxt.val()).to.be.equal('10');
            });
            it('Pass number inside should change income', function () {
                sharedObject.changeIncome(10);
                let incomeTxt = $('#income');
                sharedObject.changeIncome(13);
                expect(incomeTxt.val()).to.be.equal('13');
            });
        })
    });

    describe('Update name tests', function () {
        it('Passed empty string should not change', function () {
            sharedObject.changeName('pesho');
            let nameTxt = $('#name');
            nameTxt.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('pesho');
        });
        it('Pass non-empty string (should change)', function () {
            sharedObject.changeName('Kiril');
            let nameTxt = $('#name');
            nameTxt.val('gosho');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('gosho');
        });
    });

    describe('Update income', function () {
        it('Pass string inside should not change income', function () {
            sharedObject.changeIncome(10);
            let incomeTxt = $('#income');
            incomeTxt.val('pesho');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Pass string inside should not change income', function () {
            sharedObject.changeIncome(10);
            let incomeTxt = $('#income');
            incomeTxt.val('pesho');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Pass negative inside should not change income', function () {
            sharedObject.changeIncome(10);
            let incomeTxt = $('#income');
            incomeTxt.val('pesho');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Pass zero inside should not change income', function () {
            sharedObject.changeIncome(10);
            let incomeTxt = $('#income');
            incomeTxt.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Pass floating inside should not change income', function () {
            sharedObject.changeIncome(10);
            let incomeTxt = $('#income');
            incomeTxt.val('3.3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10);
        });
        it('Pass number inside should change income', function () {
            sharedObject.changeIncome(10);
            let incomeTxt = $('#income');
            incomeTxt.val('13');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(13);
        });
    });
});

