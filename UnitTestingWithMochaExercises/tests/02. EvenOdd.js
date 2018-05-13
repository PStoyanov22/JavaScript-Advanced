let expect = require('chai').expect;


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Testing odd or even', function () {
    it('should return undefined if input a number', function () {
        let input = 5;
        expect(isOddOrEven(input)).to.be.undefined;
    });
    it('should return undefined if input an object', function () {
        let input = {age: 5};
        expect(isOddOrEven(input)).to.be.undefined;
    });
    it('should return even if a string.length % 2 == 0', function () {
        expect(isOddOrEven('string')).to.equal('even');
    });
    it('should return even if a string.length % 2 != 0', function () {
        expect(isOddOrEven('str')).to.equal('odd');
    });
});