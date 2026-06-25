//Q1
let num = 23;
if(num%10 == 0){
    console.log("good");
}else{
    console.log("bad");
}

//Q2
let name = prompt("Enter your name");
let age = prompt("Enter your age (yrs)");
alert(`${name} is ${age} years old`);

//Q3
let qat = 1;
switch(qat){
    case 1: console.log("Months in Quarter 1:January, February, March");
            break;
    case 2: console.log("Months in Quarter 2:April, May, June");
            break;
    case 3: console.log("Months in Quarter 3:July, August, September");
            break;
    case 4: console.log("Months in Quarter 4:October, Novenber, December");
            break;
    default: console.log("No such quarter") 
}

//Q4
let str = "asdefrewfw";
if((str[0]=='a' || str[0]=='A') && str.length > 5){
    console.log("Golden String");
}else{
    console.log("Not a golden String");
}

//Q5
let a = 2;
let b = 3;
let c = 4;
if(a>b){
    if(a>c){
        console.log(a, " is largest");
    }else{
         console.log(c, " is largest");
    }
} else{
    if(b>c){
        console.log(b, " is largest");
    }else{
         console.log(c, " is largest");
    }
}

//Q6
let x = 34;
let y = 1234;
if( (x%10) == (y%10)){
    console.log("Numbers have same units digit: ", x%10);
}else{
    console.log("Numbers dont have same units digit");
}