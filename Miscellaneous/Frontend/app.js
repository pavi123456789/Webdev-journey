// OOP in JavaScript
// //----------------- OOP Prototype ----------------------------

// let arr = [1,2,3];
// let arr2 = [2, 6, 7];
// arr.sayHello = () => { console.log("Hello") };
// arr2.sayHello = () => { console.log("Hello") };

// console.log(arr.__proto__); // access a copy pf the ovj
// console.log(Array.prototype) // access actual object

// // In prototype the function is commomn for all objects

// console.log(arr.sayHello === arr2.sayHello);
// arr.__proto__.sayBye = () => {console.log("Byee")};
// console.log(arr.sayBye === arr2.sayBye);

// //------------Factory Function------------------
// // func that creates objects
// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${name}`);
//         }
//     };
//     return person;
// }

// let p1 = PersonMaker("adam", 23);
// console.log(p1);
// p1.talk();

// let p2 = PersonMaker("lila", 12);
// p2.talk();
// // disadvantage of factory function -->
// // object make copy for themsleves
// console.log(p1.talk === p2.talk);

// // -------------- New Operator ----------------
// // create object with constructor function

// // constructor does not return anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// };

// let per1 = new Person("adam", 45);
// let per2 = new Person("pinko", 23);

// console.log(per1.talk === per2.talk);

// //------------------Class---------------------
// // start class with capital letter
// class Human{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let h1 = new Human("adam", 45);
// let h2 = new Human("pinko", 23);
// console.log(h1 , h2);
// console.log(h1.talk === h2.talk);

// ------------------ Inheritance -----------------------
// exptends keyword to inherit
// super() to use base constructor
class Person{ // Base class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    };
}

class Teacher extends Person{
    constructor(name, age, subj){
        super(name, age);
        this.subj = subj;
    };
}

let std1 = new Student("Rohit", 12, 89);
std1.talk();

let teach1 = new Teacher("Priya", 54, "maths");
teach1.talk();
