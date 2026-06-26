// // --------- FUNCTIONS --------
// function print() {
//     console.log("Hello");
//     console.log("how");
//     console.log("you?");
// }

// print();

// function rollDice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }

// rollDice();

// function sum(a, b){
//     let c = a + b;
//     console.log(a, "+", b, "=", c);
// }

// sum(3,6);
// sum(5); // NO error when all args are not passed

// function avg(a, b, c){
//     console.log("avg of ", a, b, c, "=", (a+b+c)/3);
// }
// avg(3,7,5);

// //---------- RETURN keyword ----------
// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5));
// console.log(add(3,add(4,6)));

// function isAdult(age){
//     if(age >= 18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }

// console.log(isAdult(4));

// function getSum(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(getSum(3));


// let strs = ["hi", "hello", "bye", "!"];
// function concat(strs){
//     let res ="";
//     for(let i = 0; i <= strs.length; i++){
//         res += strs[i];
//     }
//     return res;
// }
// console.log(concat(strs));

// ------------ SCOPE -----------------
// fucniton, block {}, lexical, global
{
    let a = 25;
}
//console.log(a) // error
// blocks - for{}, if{}

// lexical - nested function

function outer(){
    let x = 5;
    function inner(){
        console.log(x);
        console.log(y);
    }
    let y = 8;
    inner();
    
}
outer();
//inner(); // error //fucntion scope till outer function only

// ------- FUNCYION EXPRESSION ------------
let sum = function(a,b){
    return a+b;
};
console.log(sum(3,7));

//------------- HIGH ORDER FUNCTION-----------
// takes one or more functions as arguments
// returns a function

function multiGreet(func, count){
    for(let i = 0; i < count; i++){
        func();
    }
};

let greet = function() {
    console.log("hello");
};

multiGreet(greet, 3);
multiGreet(function(){console.log("namaste")}, 2);

function oddEvenTest(req){
    if(req == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(req == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("wrong req");
    }
}
let func = oddEvenTest("odd");
console.log(func(5));


//-------------Methods-----------
// functions for objects
const calc = {
    num : 55,
    add : function(a,b) {
        return a+b;
    },
    sub : function(a,b) {
        return a-b;
    },
    mul(a,b) { // another way to write function
        return a*b;
    }
}