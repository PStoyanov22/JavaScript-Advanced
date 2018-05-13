let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('Math Enforcer Tests', function () {
    describe('addFive tests', function () {
        it('should return undefined with a non-number value', function () {
            expect(mathEnforcer.addFive('pesho')).to.be.undefined;
        });
        it('should return 10 with a positive integer value', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('should return 0 with a negative integer value', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it(' (should return correct result with a floating-point value', function () {
            expect(mathEnforcer.addFive(2.22)).to.be.closeTo(7.22, 0.01);
        });
    });

    describe('subtractTen tests', function () {
        it('should return undefined with a non-number value', function () {
            expect(mathEnforcer.subtractTen('pesho')).to.be.undefined;
        });
        it('should return 0 with a positive integer value', function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it('should return -15 with a negative integer value', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('should return 2.22 with a floating-point value', function () {
            expect(mathEnforcer.subtractTen(12.22)).to.be.closeTo(2.22, 0.01);
        });
    });


    describe('sum tests', function () {
        it('should return undefined with a non-number value', function () {
            expect(mathEnforcer.sum('pesho', 2)).to.be.undefined;
        });
        it(' (should return undefined with a non-number value', function () {
            expect(mathEnforcer.sum(2, 'pesho')).to.be.undefined;
        });
        it(' (should return correct result with a positive integers value', function () {
            expect(mathEnforcer.sum(10, 20)).to.be.equal(30);
        });
        it(' (should return correct result with a negative integers value', function () {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        });
        it(' (should return correct result with a floating-point values', function () {
            expect(mathEnforcer.sum(1.22, 13.11)).to.be.closeTo(14.33, 0.01)
        });
    });
});