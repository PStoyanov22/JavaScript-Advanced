let StringBuilder = require('../02.StringBuilder');
let expect = require('chai').expect;


describe('StringBuilder func', function () {
    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder('pesho');
    });

    describe('check if functions exist', function () {
        it('should return true if append', function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true)
        });
        it('should return true if prepend', function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.equal(true)
        });
        it('should return true if insert', function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.equal(true)
        });
        it('should return true if remove', function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.equal(true)
        });
        it('should return true if toString', function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.equal(true)
        })
    });
    describe('check if accepted is string or not or empty', function () {
        it('should return string if string', function () {
            expect(stringBuilder.toString()).to.equal('pesho')
        });

        it('should return string if string', function () {
            stringBuilder = new StringBuilder();
            expect(stringBuilder.toString()).to.equal('')
        });
        it('should throw error if not string', function () {
            expect(() => stringBuilder = new StringBuilder(4)).to.throw('Argument must be string')
        })
    });

    describe('check append', function () {
        it('should return string if string', function () {
            stringBuilder.append(' peps');
            expect(stringBuilder._stringArray.length).to.equal(10);
            expect(stringBuilder.toString()).to.equal('pesho peps')
        });

        it('should throw error if not string', function () {
            expect(() => stringBuilder.append({})).to.throw('Argument must be string')
        })
    });

    describe('check prepend', function () {
        it('should return string if string', function () {
            stringBuilder.prepend('peps ');
            expect(stringBuilder._stringArray.length).to.equal(10);
            expect(stringBuilder.toString()).to.equal('peps pesho')
        });

        it('should throw error if not string', function () {
            expect(() => stringBuilder.prepend(4)).to.throw('Argument must be string')
        })
    });

    describe('check insertAt', function () {
        it('should return correct string', function () {
            stringBuilder.insertAt('ei', 2);
            expect(stringBuilder._stringArray.length).to.equal(7)
            expect(stringBuilder.toString()).to.equal('peeisho')
        });

        it("insertAt Error", function() {
            expect(() => stringBuilder.insertAt([], 2)).to.throw('Argument must be string')
        })

    });

    describe('check remove', function () {
        it('should return correct string', function () {
            stringBuilder.remove(2, 2);
            expect(stringBuilder._stringArray.length).to.be.equal(3)
            expect(stringBuilder.toString()).to.equal('peo')
        });

      //it('should return array length if string', function () {
      //    stringBuilder.remove(2, 2);
      //    expect(stringBuilder._stringArray.length).to.equal(3)
      //});
    });
});