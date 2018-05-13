let expect = require("chai").expect;
const sumNum = require('../04. SumNumbers');

describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sumNum([1, 2])).to.be.equal(3);
    });
    it("should return 3 for [1.5, 2.5], -1", function() {
        expect(sumNum([1.5, 2.5, -1])).to.be.equal(3);
    });
    it("should return 0 for []", function() {
        expect(sumNum([])).to.be.equal(0);
    });
    it("should return 1 for [1]", function() {
        expect(sumNum([1])).to.be.equal(1);
    });
    it("should return NaN for ['Invalid data']", function() {
        expect(sumNum(['Invalid data'])).to.be.NaN
    });

});