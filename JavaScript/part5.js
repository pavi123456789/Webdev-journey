// //-----OBJECT LITERALS-------------
// // to store keyed collection and complex entities
// // property =? (key, value) pair
// // objects are a collection of properties

// let student = {
//     name : "abc",
//     age: 12,
//     marks: [23, 56, 23],
// };

// let post = {
//     username : "asa dsd",
//     content : "hheiwo fioehf fweirh wiewhe ",
//     likes : 654,
//     reposts : 4,
//     tags : ["as", "sdsa", "ds"]
// };

// // accessing 
// console.log(student.name);
// console.log(student["name"]);
// console.log(student.marks[1]);
// let years = "age";
// console.log(student[years]) // not student.years

// let obj = {
//     1 : "a",
//     2 : "b",
//     true : "c",
//     null : "d",
//     undefined : "e",
// };
// console.log(obj[1]); // these vaues get turned into string
// console.log(obj[null]);
// // console.log(obj.1); // does not change to string // cause error
// console.log(obj.null) // will run tho

// // adding or updating
// student.age = 44;
// console.log("updating age", student.age);
// student.gender = "mle";
// console.log("adding gnder", student);

// // delete
// delete student.marks;
// console.log("deleting marks", student);

// // NESTED OBJECTS
// const classInfo = {
//     aman : {
//         grade: "A+",
//         city: "Delhi",
//     },

//     karena : {
//         grade: "A+",
//         city: "Mumbai",
//     }
// };
// console.log(classInfo.aman.grade);

// // ARRAYS OF OBJECT
// let stdclass = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi",
//     },
//     {
//         name: "karena",
//         grade: "A+",
//         city: "Mumbai",
//     }
// ];
// console.log(stdclass[1].name);

// -------------- MATH OBJECT --------------
// properties => Math.PI, Math.E
// methods = > Math.abs(n), 
//             Math.pow(a,b), 
//             Math.floor(n) - nerest smallest int val
//             Math.ceil(n)
//             Meth.random() - from 0 to 1 , 1 not included

console.log("pi ",Math.PI);
console.log("e ",Math.E);
console.log("abs ",Math.abs(-343.43));
console.log("floor",Math.floor(343.93));
console.log("ceil ",Math.ceil(343.03));
console.log("floor -ve",Math.floor(-343.93));
console.log("ceil -ve",Math.ceil(-343.03));
console.log("random ",Math.random());
console.log("pow ",Math.pow(4,3));

// Random integers
// from 1 to n
let m = 20;
let num = Math.random();
num = num * m;
num = Math.floor(num);
num = num+1;
console.log(num);
console.log(Math.floor( Math.random() * m) + 1);

// from a to b , a not included
let a = 20;
let b = 25;
let n = b-a+1;
console.log(Math.floor( Math.random() * n) + a);