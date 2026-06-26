//Q1
let arr = [2, 4, 6, 21, 65, 12];
let num = 10;
let largeEle = function(arr, num){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(largeEle(arr, num));

//Q2
let string = "asdsknandsaanskdtuyturr";
function uniqueChar(str){
    let ans="";
    for(let i = 0; i < str.length; i++){
        let curr = str[i];
        if(ans.indexOf(curr) == -1){
            ans += curr;
        }
    }

    return ans;
}
console.log(uniqueChar(string));

//Q3
let country = ["Australia", "Germany", "United States of America"];
let longCntry = function(country){
    let ans = "";
    let maxLen = country[0].length;
    for(let i = 1; i < country.length; i++){
        if(country[i].length > maxLen){
            maxLen = country[i].length;
            ans = country[i];
        }
    }
    return ans;
}
console.log(longCntry(country));


//Q4
let str = "asdefgijkolkdu";
let vowel = function(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a"| str[i] == "e"| str[i] == "i"| str[i] == "o"| str[i] == "u"){
            count++;
        }
    }
    return count;
}
console.log(vowel(str));

//Q5
let start = 1;
let end = 10;
let randNum = function(start, end){
    let n = end - start + 1;
    return (Math.floor( Math.random() * n) + start);
}
console.log(randNum(start,end));