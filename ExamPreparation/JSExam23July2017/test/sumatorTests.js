let expect = require('chai').expect;
let Sumator = require('../02.SumatorClass');

describe('Sumator class testing', function () {
    let sumator;

    beforeEach(function ()  {
        sumator = new Sumator;
    });

    describe('if functions and prop exist', function () {
        it('should return 0 when initiate', function () {
            expect(sumator.data.length).to.equal(0)
        });
        it('proto should have add', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true)
        });
        it('proto should have remove', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true)
        });
        it('proto should have sumNums', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true)
        });
        it('proto should have toString', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true)
        });
    });

    describe('add funct tests', function () {
        it('should add nums', function () {
            sumator.add(4);
            sumator.add(2);
            sumator.add(8);
            expect(sumator.toString()).to.equal('4, 2, 8')
        });
        it('should add strings', function () {
            sumator.add('pesho');
            sumator.add('gosho');
            sumator.add('stefko');
            expect(sumator.toString()).to.equal('pesho, gosho, stefko')
        });
        it('should add objects', function () {
            sumator.add({name: 'pesho'});
            sumator.add({name: 'stefko'});

            expect(sumator.toString()).to.equal('[object Object], [object Object]')
        });
        it('should add mixed', function () {
            sumator.add(5);
            sumator.add('gosho');
            sumator.add({name: 'pesho'});
            expect(sumator.toString()).to.equal('5, gosho, [object Object]')
        });
    });

    describe('sumNums function tests', function () {
        it('should return sum if numbers', function () {
            sumator.add(6);
            sumator.add(7);
            sumator.sumNums();
            expect(sumator.sumNums()).to.equal(13);
        });
        it('should return 0 if no numbers', function () {
            sumator.sumNums();
            expect(sumator.sumNums()).to.equal(0);
        });

        it('should return 0 if no numbers', function () {
            sumator.add('pesho');
            sumator.add({name: 'sasho'});
            sumator.sumNums();
            expect(sumator.sumNums()).to.equal(0);
        });
    });

    describe('remove funct tests', function () {
        it('should remove filtered', function () {
            sumator.add(2);
            sumator.add(3);
            sumator.add(4);
            sumator.add(7);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.toString()).to.equal('3, 7')
        });

    });

    describe('toString with empty data', function () {
        it('should gives empty', function () {
            expect(sumator.toString()).to.equal('(empty)')
        });

    });


});
let list = new Sumator();
console.log(`list = [${list}]`);
list.add(1);
list.add(2);
list.add("three");
list.add(4);
console.log(`list = [${list}]`);
console.log("sum = " + list.sumNums());
list.add("5.5"); // not a number!
list.add(7.7);
console.log(`list = [${list}]`);
console.log("sum = " + list.sumNums());
list.removeByFilter(x => x % 2 === 0);
console.log(`list = [${list}]`);
console.log("sum = " + list.sumNums());