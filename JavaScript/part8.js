// //-------------Array Methods--------
// // arr.forEach(some funtion def or name)
// let arr = [1, 2, 3, 4, 5];
// let print = function(ele){
//     console.log(ele);
// }
// arr.forEach(print);

// let arr2 = [{
//     name:"a",
//     marks: 34
//     }, {
//     name:"b",
//     marks: 44
//     }, {
//     name:"c",
//     marks: 76
// }];
// let print2 = function(ele){
//     console.log(ele.name, ele.marks);
// }
// arr2.forEach(print2);

// // map()
// let num = [1, 2, 3, 4];
// let double = num.map(function(ele){
//     return ele*2;
// });
// console.log(double);

// // filter()
// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let even = nums.filter( (n) => (n%2 == 0)); // n is added if true 
// console.log(even);

// // every() - return true if every ele of array gives true for some func
// console.log( [1, 2, 3, 4].every( (el) => (el%2 == 0)) );
// console.log( [ 2, 4].every( (el) => (el%2 == 0)) );

// // some() - returns true if some ele of array give true
// console.log( [1, 2, 3, 4].some( (el) => (el%2 == 0)) );
// console.log( [ 1, 3].some( (el) => (el%2 == 0)) );



// // reduce() - reduces array to a single value
// //          - reduce(func with 2 arg (accumulator , element))
// console.log( ["a", "b", "c", "d"].reduce( (res, ele) => (res+ele) ) );

// let arr3 = [1, 2, 3, 5, 6, 8, 9, 1];
// let max = arr3.reduce( (max, el) =>{
//     if(max < el) return el;
//     return max;
// } );
// console.log(max);

// //---------Default Parameters------------
// function sum(a, b=3){
//     return a+b;
// }
// console.log(sum(7));

// //---------Spread----------------
// // expand an iterable into multiple values
// // function func(...arr){}
// let arr_1 = [1,2,3,4,5];
// Math.min(...arr_1); // we need to give individual vales for math.min
// console.log(...arr_1);

// let arr_2 = [10, 20, 30, 40, 50];
// let arr_3 = [...arr_1, ...arr_2]
// console.log(arr_3);

// let chars = [..."hlllooo"];
// console.log(chars);

// let data = {
//     email: "ironman@gmail.com",
//     password: "324sfds"
// };

// let dataCopy = {...data, id: 123};
// console.log(dataCopy);

//---------------Rest--------------
// bundels the indefinite number of args of a function in an array
// we cant use array methods on arguments, there we use ...arr
function sum(...args){
    console.log(arguments);
    return args.reduce( (add, ele) => add + ele);
}
console.log(sum(1,4,6,8));
console.log(sum(54,67));


//---------Destructuring---------------
//storing values of arrays into multiple variables
let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names; // gets stored index vise
console.log(winner,runnerup); // "tony", "bruce"

const student = {
    name: "karan",
    age: 14,
    clss: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karanQ123",
    password: "abcj"
};
// storeing key value in another variable -> username : user
// if the key does not exixt give a defaukt value -> city ="Mumbai"
let {username : user, password, city="Mumbai"} = student //gets stored key vice
console.log(user, password);