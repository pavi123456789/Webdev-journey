// // ----------- this keyword ------------
// const student = {
//     name : "asd",
//     age : 23,
//     eng : 98,
//     math : 96,
//     phy: 93,
//     getavg(){
//         return (this.eng + this.math + this.phy ) /3;
//     }
// };

// console.log(this); // window object

// //-------------- TRY & CATCH -------------
// // let a = 0;
// try{
//     console.log(a);
// }catch(err){
//     console.log("Error caught, a not defined")
//     console.log(err);
// }
// console.log("sdfsd")

// //------- Arrow Function ---------
// // like lambda fucntion
// const sum = (a,b) => {
//     console.log(a+b);
// };

// const cube = n => {  // only for single arg () not needed
//     return n**3
// };

// const mul = (a,b) => a*b; // if only return no need to use return keyword, and no {}
  
// sum(3,4);

// //----------Set Timeout---------
// // executes the code after a set time once
// // does not stop flow of code
// console.log("hihih");

// setTimeout( () => {
//     console.log("Apna COllege")
// }, 4000); // 4sec (1sec = 1000 ms)

// console.log("bybyy");
// console.log("bybyy");
// console.log("bybyy");

// //------------Set Interval-------
// // exexutes code multiple times after a set time
// let id = setInterval( () => {
//     console.log("YOO");
// }, 2000);

// //clearInterval(id); // to stop 


//------------this with arrow function----------
// have lexical scope
// arrow function has same scope as parent scope
const std = {
    name: "aman",
    marks: 95,
    prop: this,
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);
        return this.name;
    },

    getInfo1: function(){
        setTimeout(() => {
            console.log("1", this);
        },2000)
    },

    getInfo2: function(){
        setTimeout( function() {
            console.log("2",this);
        },2000)
    }
}
// for std object this is window (implcitly window is the object of almost everything)
// this in getName is the std object
// for getMarks (arrow function) this is the parent std object this
// there fore we wont be able to access std marks
console.log(std);
std.getName();
std.getMarks();
std.getInfo1();
std.getInfo2();