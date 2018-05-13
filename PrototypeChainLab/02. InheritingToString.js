function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }

    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let inheritStr = super.toString().slice(0, -1);
            return inheritStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let inheritStr = super.toString().slice(0, -1);
            return inheritStr + `, course: ${this.course})`;
        }

    }

    return {
        Person, Teacher, Student
    };
}

let person = personAndTeacher().Person;
let teacher = personAndTeacher().Teacher;
let student = personAndTeacher().Student;

let p = new person("Pesho", "pesho.abv")
let t = new teacher("Sasho", "sasho.abv", 'JS')
let s = new student("Gosh", "goosh.abv", 'Java')
console.log(s);