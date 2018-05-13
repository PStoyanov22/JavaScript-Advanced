class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }
}
function extendClass(classToExtend) {
   classToExtend.prototype.species = "Human";
   classToExtend.prototype.toSpeciesString = function (){
       return `I am a ${this.species}. ${this.toString()}`;
   }
}
let person1 = new Person("Gosho", "gosho@gmail.com");
extendClass(Person);
console.log(person1.species);
extendClass(Person);
let person = new Person("Maria", "maria@gmail.com");
console.log(Object.getPrototypeOf(person));
console.log(person.toSpeciesString());