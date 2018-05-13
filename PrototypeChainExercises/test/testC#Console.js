let expect = require('chai').expect;

let Console = class Console {
    static get placeholder() {
        return /{\d+}/g;
    }
    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
};

describe('Testing CSharp Console', function () {
    it('should return wrteline is a function', function () {
        expect(typeof Console.writeLine).to.be.equal('function')
    });

    describe('arguments length === 1', function () {
        it('should return the input', function () {
            expect(Console.writeLine('test')).to.equal('test');
        });
        it('should return JSON object', function () {
            let obj = {'name': 'Pesho'};
            let result = Console.writeLine(obj);
            expect(result).to.equal(JSON.stringify(obj))
        });
        it('should return undefined is message not string', function () {
            expect(Console.writeLine(5)).to.be.undefined;
        });
        it('should throw an error if message empty', function () {
            expect(() => Console.writeLine()).to.throw(TypeError);
        })
    });

    describe('arguments length > 1', function () {
        it('should return TypeError if message not string', function () {
            expect(() => Console.writeLine(5,'test')).to.throw(TypeError);
        });
        it('should return range if tokens more arguments', function () {
            expect(() => Console.writeLine("The sum of {0} and {1} is {2}", 3, 4)).to.throw(RangeError);
        });
        it('should return range if tokens less arguments', function () {
            expect(() => Console.writeLine("The sum of {0} and {1}", 3, 4, 5)).to.throw(RangeError);
        });
        it('should return range if token is negative', function () {
            expect(() => Console.writeLine("The sum of {0} and {1} is {-2}", 3, 4, 5)).to.throw(RangeError);
        });
        it('should return range if tokens is biggerIndex', function () {
            expect(() => Console.writeLine("The sum of {0} and {1}, {23}", 3, 4, 5)).to.throw(RangeError);
        });
        it('should throw RangeError on out-of-range placeholder index', () => {
            expect(() => Console.writeLine('Test {20}', 'first')).to.throw(RangeError);
        });

        it('should return typyError if tokens equal 0', function () {
            expect(() => Console.writeLine("The sum of", 3, 4, 5)).to.throw(TypeError);
        });
        it('should return result if tokens equal arguments - 1', function () {
            expect(Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7)).to.be.equal('The sum of 3 and 4 is 7');
        });
        it('should return result if mixed tokens', function () {
            expect(Console.writeLine("The sum of {2} and {0} is {1}", 3, 4, 7)).to.be.equal('The sum of 7 and 3 is 4');
        });
        it('should return result if one token', function () {
            expect(Console.writeLine("The {0}", 'Sun')).to.be.equal('The Sun');
        });
    })
});
