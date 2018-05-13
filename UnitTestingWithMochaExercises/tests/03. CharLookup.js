let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('Testing lookUpChar function', function () {
    describe('Test if both parameters exist and are correct', function () {
        it('should return undefined if param 1 is not a string and par 2 is not a number', function () {
            let string = 5;
            let number = '20';
            expect(lookupChar(string, number)).to.be.undefined;
        });
        it('should return undefined if param 1 is not a string and par 2 is not a number', function () {
            let string = {age: 5};
            let number = '20'
            expect(lookupChar(string, number)).to.be.undefined;
        });
        it('should return undefined if param 1 is a string and par 2 is not a number', function () {
            let string = 'pesho';
            let number = '20';
            expect(lookupChar(string, number)).to.be.undefined;
        });
        it('should return undefined if param 1 is not a string and par 2 a number', function () {
            let string = {age: 5};
            let number = 20;
            expect(lookupChar(string, number)).to.be.undefined;
        });
        it('should return undefined if param 1 is not a string and par 2 is fraction', function () {
            let string = 'pesho';
            let number = 3.43;
            expect(lookupChar(string, number)).to.be.undefined;
        });
    });
    describe('Test if both index is valid', function () {
        it('should return Incorrect index if param 2 is not a negative number', function () {
            let index = -2;
            expect(lookupChar('string', index)).to.equal("Incorrect index");
        });
        it('should return Incorrect index if param 2 is bigger than length', function () {
            let str = 'pesho';
            let index = str.length + 1;
            expect(lookupChar(str, index)).to.equal("Incorrect index");
        });
        it('should return Incorrect index if param 2 equals length', function () {
            let str = 'pesho';
            let index = str.length;
            expect(lookupChar(str, index)).to.equal("Incorrect index");
        });
    });
    describe('Test if both are valid', function () {
        it('should return char', function () {

            expect(lookupChar('string', 2)).to.equal("r");
        });
        it('should return empty if char is space', function () {

            expect(lookupChar('string to check', 6)).to.equal(" ");
        });
    });

});