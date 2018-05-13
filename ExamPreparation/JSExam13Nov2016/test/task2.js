let expect = require('chai').expect;
let createList = require('../02.AddSwapShiftLeftRightList');

describe('test createList', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe('test add', function () {
        it('with one number', function () {
            list.add(4);
            expect(list.toString()).to.equal('4')
        });
        it('should add numbers', function () {
            list.add(5);
            list.add(4);
            list.add(6);
            expect(list.toString()).to.equal('5, 4, 6')
        });
        it('should add strings', function () {
            list.add('5');
            list.add('pesho');

            expect(list.toString()).to.equal('5, pesho')
        });
        it('should mixed', function () {
            list.add(5);
            list.add('pesho');
            list.add({});
            expect(list.toString()).to.equal('5, pesho, [object Object]')
        });
    });

    describe('test shift left', function () {
        it('with one', function () {
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.equal('3')
        });
        it('with many', function () {
            list.add(3);
            list.add('pesho');
            list.add(4);
            list.shiftLeft();
            expect(list.toString()).to.equal('pesho, 4, 3')
        });
    });

    describe('test shift right', function () {
        it('with one', function () {
            list.add(3);
            list.shiftRight();
            expect(list.toString()).to.equal('3')
        });
        it('with many', function () {
            list.add(3);
            list.add('pesho');
            list.add(4);
            list.shiftRight();
            expect(list.toString()).to.equal('4, 3, pesho')
        });
    });

    describe('test swap', function () {
        it('index1 < 0', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(-1, 2)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('index2 < 0', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(1, -2)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('index1 > length', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(4, 2)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('index2 > length', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(1, 4)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('index1 === index2', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(1, 1)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('index1 === string', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap('1', 2)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('index2 === str', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(1, '2')).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('correct indexes', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(0, 2)).to.equal(true);
            expect(list.toString()).to.equal('5, 4, 3')
        });
        it('correct indexes', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(2, 0)).to.equal(true);
            expect(list.toString()).to.equal('5, 4, 3')
        });
        it('index1 === length indexes', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(3, 1)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('index2 === length indexes', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(1, 3)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });
        it('one index', function () {
            list.add(3);
            list.add(4);
            list.add(5);
            expect(list.swap(3)).to.equal(false);
            expect(list.toString()).to.equal('3, 4, 5')
        });

    });

});