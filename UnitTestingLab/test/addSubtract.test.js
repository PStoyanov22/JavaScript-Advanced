
let expect = require('chai').expect;
let createCalculator = require('../07. AddSubtract').createCalculator;

describe('Calc tests', function () {

    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it("should have get() function", function () {
        let hasProp = calc.hasOwnProperty('get');
        expect(hasProp).to.be.true;
    });

    it("should have subtract() function", function(){
        let hasProp = calc.hasOwnProperty('subtract');
        expect(hasProp).to.be.true;
    });

    it("should have add() function", function(){
        let hasProp = calc.hasOwnProperty('add');
        expect(hasProp).to.be.true;
    });

    it('should return object', function () {
        expect(typeof calc).to.equal('object');
    });
    it('Expect value to be undefined', function () {
        expect(calc.value).to.be.undefined
    });
    it('should return 0 if nothing added', function () {
        expect(calc.get()).to.equal(0);
    });
    it('should return 0 if nothing added', function () {
        calc.add(3);
        expect(calc.get()).to.equal(3);
    });
    it('should return 0 if nothing added', function () {
        calc.subtract(3);
        expect(calc.get()).to.equal(-3);
    });
    it('should return 5 if added', function () {
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.equal(8);
    });
    it('should return -2 if one negative added', function () {
        calc.add(3);
        calc.add(-5);
        expect(calc.get()).to.equal(-2);
    });
    it('should return -8 if negative added', function () {
        calc.add(-3);
        calc.add(-5);
        expect(calc.get()).to.equal(-8)
    });
    it('should return 8 if string number added', function () {
        calc.add(3);
        calc.add('5');
        expect(calc.get()).to.equal(8)
    });
    it('should return NaN if string added', function () {
        calc.add(3);
        calc.add('pesho');
        expect(calc.get()).to.be.NaN;
    });
    it('should return 0 if nothing added', function () {
        calc.add(3);
        calc.subtract(5);
        expect(calc.get()).to.equal(-2);
    });
    it('should return fraction added', function () {
        calc.add(3.2);
        calc.subtract(1.19);
        expect(calc.get()).to.be.closeTo(2.01, 0.0001);
    });
    it('Expect subtract(4) to return -4', function () {
        calc.subtract(4);
        expect(calc.get()).to.be.equal(-4)
    });
    it('Expect subtract(4) subtract(3) to return -7', function () {
        calc.subtract(4);
        calc.subtract(3);
        expect(calc.get()).to.be.equal(-7)
    });
    it('Expect subtract("4") to return -4', function () {
        calc.subtract("4");
        expect(calc.get()).to.be.equal(-4);
    });
    it('Expect subtract("pesho") to return NaN', function () {
        calc.subtract("pesho");
        expect(calc.get()).to.be.NaN
    });
});