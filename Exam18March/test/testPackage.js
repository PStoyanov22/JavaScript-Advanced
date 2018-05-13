let expect = require('chai').expect;
let PaymentPackage = require('../02.ProblemPackage');


describe('test problemPackage', function () {
    let problemPackage;

    beforeEach(function () {
        problemPackage = new PaymentPackage('pesho', 1500);
    });

    describe('instantiated with two properties', function () {
        it('should give correct result', function () {
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        // these two added todey 19.03
        it("constructor should be a function", () => {
            expect(typeof PaymentPackage.constructor).to.equal('function');
        });

        it("constructor should take 2 parameters", () => {
            expect(PaymentPackage.length).to.equal(2);
        });

    });
    describe('accessor get name', function () {
        it('should give correct result', function () {
            expect(problemPackage.name).to.equal('pesho');
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        it('should give correct result if changed', function () {
            problemPackage.name = 'gosho';
            expect(problemPackage.name).to.equal('gosho');
            expect(problemPackage.toString()).to.equal('Package: gosho\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });

        it('should give wrong result', function () {
            expect(() => problemPackage.name = 5).to.throw('Name must be a non-empty string');
        });
        it('should give wrong result', function () {
            expect(() => problemPackage.name = '').to.throw('Name must be a non-empty string');
        });
    });
    describe('accessor get value', function () {
        it('should give correct result', function () {
            expect(problemPackage.value).to.equal(1500);
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });

        it('should give correct result if changed', function () {
            problemPackage.value = 10;
            expect(problemPackage.value).to.equal(10);
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 10\n' +
                '- Value (VAT 20%): 12')
        });

        it('should give wrong result', function () {
            expect(() => problemPackage.value = -5).to.throw('Value must be a non-negative number');
        });
        it('should give correct result', function () {
            expect(problemPackage.value = 0).to.equal(0);
        });
        it('should give wrong result', function () {
            expect(() => problemPackage.value = 'pesho').to.throw('Value must be a non-negative number');
        });


    });
    describe('accessor VAT value', function () {
        it('should give correct result', function () {
            expect(problemPackage.VAT).to.equal(20);
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        it('should give wrong result if changed', function () {
            problemPackage.VAT = Number(0);
            expect(problemPackage.VAT).to.equal(0);// Default value
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 1500\n' +
                `- Value (VAT 0%): 1500`)

        }); it('should give correct result if changed', function () {
            problemPackage.VAT = Number(10);
            expect(problemPackage.VAT).to.equal(10);// Default value
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 1500\n' +
                `- Value (VAT 10%): ${problemPackage.value * 1.1}`)

        });
        it('should give wrong result if changed', function () {                 // Default value

            expect(() => problemPackage.VAT = -10).to.throw('VAT must be a non-negative number');
        });
        it('should give wrong result if changed', function () {
            problemPackage.VAT = 30;      // Default value

            expect(() => problemPackage.VAT = 'pesh').to.throw('VAT must be a non-negative number');
        });
    });
    describe('accessor Active value', function () {
        it('should give correct result', function () {
            expect(problemPackage.active).to.equal(true);
        });
        it('should give correct result if changed', function () {
            // Default value
            problemPackage.active = false;
            expect(problemPackage.active).to.equal(false);
        });
        it('should give wrong result if changed', function () {
            problemPackage.VAT = 30;      // Default value

            expect(() => problemPackage.active = 'pesho').to.throw('Active status must be a boolean');
        });
    });
    describe('toString', function () {
        it('should print correctly', function () {
            this.active = true;
            expect(problemPackage.toString()).to.equal('Package: pesho\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        it('shoult print incorrectly if active equals false', function () {
            let pay = new PaymentPackage('HR Services', 1500);
            pay.active = false;
            expect(pay.toString()).to.equal('Package: HR Services (inactive)\n- ' +
                'Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        })

    })
});