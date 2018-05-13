let expect = require('chai').expect;
let SortedList = require('../02.SortedList');
let myList = '';
describe('sortedList function tests', function (){
    beforeEach(function () {
        myList = new SortedList();
    });
    describe('check if function exist', function () {
        it('should have add', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true)
        });
        it('should have remove', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true)
        });
        it('should have get', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true)
        });
        it('should have size', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true)
        });
    });

    describe('check add function', function () {
        it('should add 5', function () {
            myList.add(5);
            expect(myList.list.join(', ')).to.equal('5')
        });
        it('should add negative', function () {
            myList.add(-5);
            expect(myList.list.join(', ')).to.equal('-5')
        });
        it('should add multiple times', function () {
            myList.add(-5);
            myList.add(3);
            myList.add(8);
            expect(myList.list.join(', ')).to.equal('-5, 3, 8')
        });

    });

    describe('check remove function', function () {
        it('should throw an error if length == 0', function () {
            expect(() => myList.remove()).to.throw(Error, 'Collection is empty.')
        });
        it('should throw an error if negative index', function () {
            myList.add(-5);
            expect(() => myList.remove(-1)).to.throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should throw an error if index equals length', function () {
            myList.add(-5);
            myList.add(3);
            expect(() => myList.remove(2)).to.throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should throw an error if index outside length', function () {
            myList.add(-5);
            expect(() => myList.remove(1)).to.throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should remove correctly', function () {
            myList.add(-5);
            myList.remove(0);
            expect(myList.list.join(', ')).to.equal('')
        });
        it('should remove correctly', function () {
            myList.add(4);
            myList.add(2);
            myList.add(-5);
            myList.remove(1);
            expect(myList.list.join(', ')).to.equal('-5, 4')
        });

    });
    describe('check get function', function () {
        it('should throw an error if length == 0', function () {

            expect(() => myList.get()).to.throw(Error, 'Collection is empty.')
        });
        it('should throw an error if negative index', function () {
            myList.add(-5);
            expect(() => myList.get(-1)).to.throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should throw an error if index equals length', function () {
            myList.add(-5);
            myList.add(3);
            expect(() => myList.get(2)).to.throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should throw an error if index outside length', function () {
            myList.add(-5);
            expect(() => myList.get(1)).to.throw(Error, 'Index was outside the bounds of the collection.')
        });
        it('should gives correctly', function () {
            myList.add(-5);
            expect(myList.get(0)).to.equal(-5)
        });
        it('should get correctly', function () {
            myList.add(4);
            myList.add(2);
            myList.add(-5);
            expect(myList.get(1)).to.equal(2)
        });

    });
    describe('check size function', function () {
        it('should give proper result', function () {
            myList.add(4);
            myList.add(2);
            myList.add(-5);
            expect(myList.size).to.equal(3)
        });
        it('should give 0 if empty', function () {
            expect(myList.size).to.equal(0)
        });
    });

});