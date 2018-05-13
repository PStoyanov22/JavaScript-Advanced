let expect = require('chai').expect;
let rgbToHexColor = require('../06. rgbToHex').rgbToHexColor;

describe("RGB to Hex", function () {
    it('should return #FF9EAA for (255, 158, 170)', function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });
    it('should return #0C0D0E for (12, 13, 14)', function () {
        expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
    });
    it('should return #000000 for (0, 0, 0)', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('should return #FFFFFF for (255, 255, 255)', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('should return undefined for fractions', function () {
        expect(rgbToHexColor(3.13, 158, 170)).to.be.undefined;
    });
    it('should return undefined for fractions', function () {
        expect(rgbToHexColor(255, 2.13, 170)).to.be.undefined;
    });
    it('should return undefined for fractions', function () {
        expect(rgbToHexColor(255, 213, 1.70)).to.be.undefined;
    });
    it('should return undefined for fractions', function () {
        expect(rgbToHexColor('pesho', {}, [])).to.be.undefined;
    });
    it('should return undefined for greater values', function () {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });
    it('should return undefined for lower values', function () {
        expect(rgbToHexColor(-1, 34, 34)).to.be.undefined;
    });
    it('should return undefined for lower values', function () {
        expect(rgbToHexColor(222, -1, 123)).to.be.undefined;
    });
    it('should return undefined for lower values', function () {
        expect(rgbToHexColor(122, 232, -1)).to.be.undefined;
    });
});