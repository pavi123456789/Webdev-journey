//Q1
let n = 2;
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
while(arr.includes(n)){
    let i = arr.indexOf(n);
    arr.splice(i,1);
}
console.log(arr);

//Q2
let num = 111112;

let copy = num;
let count = 0;
while(copy != 0){
    copy = Math.floor(copy/10);
    count++;
}
console.log(count);

//Q3
let copy2 = num;
let sum = 0;
while(copy2 != 0){
    let digit = copy2%10;
    copy2 = Math.floor(copy2/10);
    sum += digit;
}
console.log(sum);

//Q4
let num2 = 4;
let fact = 1;
for(let i = 1; i <= num2; i++){
    fact *= i;
}
console.log(fact);

//Q5
let arr2 = [1,4,23,66,54,44,12,7];
let maxi = arr2[0];
for(let i = 1; i < arr2.length; i++){
    if(arr2[i] > maxi) maxi = arr2[i];
}
console.log(maxi);