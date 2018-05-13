(function solution(){
    String.prototype.ensureStart = function(str){
      if(!this.startsWith(str)){
         return str + this;
      }
      return this.toString();
    };
    String.prototype.ensureEnd = function (str){
        if(!this.endsWith(str)){
            return this + str;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function(){
        return this.toString() === '';

    };
    String.prototype.truncate = function (num){
        if(num >= this.length){
            return this.toString();
        }
       if(num < 4){
           return '.'.repeat(num);
       }
       if(this.indexOf(' ') < 0){
           return this.slice(0, num - 3) + '...';
       }
       let substrOfThis = this.substring(0, num).trim();
       let lastIndexOfSpace = substrOfThis.lastIndexOf(' ');
       if(lastIndexOfSpace !== -1){
           return substrOfThis.substring(0, lastIndexOfSpace) + '...';
       }

    };
    String.format = function (string, ...params){
        for (let i = 1; i < arguments.length; i++) {
            string = string.replace(`{${i - 1}}`, arguments[i]);
        }
        return string;
    }


})();

let str = 'the quick brown fox jumps over the lazy dog';



str = str.truncate(43);
console.log(str);
str = str.truncate(25);
console.log(str);
str = str.truncate(43);
console.log(str);
str = str.truncate(45);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox','quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}','dog');
console.log(str);