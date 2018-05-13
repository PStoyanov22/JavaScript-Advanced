let model = (function extension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (number) {
        let result = [];
        for (let i = number; i < this.length; i++) {
            result.push(this[i]);
        }
        return result
    };
    Array.prototype.take = function (number) {
        let result = [];
        for (let i = 0; i < number; i++) {
            result.push(this[i]);
        }
        return result
    };

    Array.prototype.sum = function () {
       let result = 0;
        for (let i = 0; i < this.length; i++) {
            result += this[i];
        }
        return result;


    };
    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length;

    }

})();

