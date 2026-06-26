//Q1
let arr1 = [1,3,6,2,5]
let square = arr1.map( (ele) => ele**2);
let sum = square.reduce( (sum, ele) => sum+ele);
let avg = sum/square.length;
console.log(square,sum,avg);

//Q2
let arr2 = [2,3,6,73,4];
let plus5 = arr2.map( (ele) => ele+5);
console.log(plus5);


//Q3
let arr3=["ewrw", "werew", "gfhgf"];
let upperCase = arr3.map( (str) => str.toUpperCase());
console.log(upperCase);

//Q4
function doubleAndReturnArgs(arr, ...args){
    let res = [...arr, ...args.map( (e) => e*2)];
    return res;
}
console.log(doubleAndReturnArgs(arr2, 40, 30, 20, 10));

//Q5
function mergeObjects (obj1, obj2){
    return {...obj1, ...obj2};
}
let obj1 = {
    name: "sfd",
    age:3,
    dob: "12/23/4312"
}
let obj2 = {
    lastName: "fdgfdg",
    sallary :453,
    id: "152/233/00012"
}
console.log(mergeObjects(obj1,obj2));