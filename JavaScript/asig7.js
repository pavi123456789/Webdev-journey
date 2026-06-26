//Q1
let arr = [2, 4, 1 ,6, 7, 8, 5];
let avg = arr => {
    let sum = 0;
    let len = arr.length;
    for(let i = 0; i<len; i++){
        sum+=arr[i];
    }
    return sum/len;
}
console.log(avg(arr));

//Q2
let isEven = num => num%2 == 0;
console.log(isEven(4));

//Q3
const obj = {
    mesg: "Hello, World!",
    logMsg(){
        console.log(this.mesg);
    }
}
setTimeout(obj.logMsg, 4000);

// Step 1: JavaScript looks up obj.logMsg ✅ found
// Step 2: Extracts the function, stores it internally
// Step 3: obj is forgotten at this point
// Step 4: 4 seconds later, setTimeout calls the function
// Step 5: this = window ❌ (not obj)

//Q4
let len = 4;
function callback(){
    console.log(this.len);
};

const object = {
    len: 5,
    method(callback){
        callback();
    }
};

object.method(callback);