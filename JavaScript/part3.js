// // ---- String Methods------------
// // 1. trim - removes trailing n leading spaces
//     let pass = prompt("Set a password");
//     console.log(pass);
//     console.log(pass.trim());

// // Strings are immutable in JS

// // 2. toUpperCase() , toLowerCase
//     let name="Arshi Katori Arshi";
//     console.log(name.toUpperCase());
//     console.log(name.toLowerCase());
    
// // 3. indexOf() - index of first occerence
//     console.log(name.indexOf("sh"));
//     console.log(name.indexOf("x"));

// // Method chaining
//     let msg="   Print Message       "
//     console.log(msg.trim().toUpperCase());

// // 4.slice() -> slice(n) : from nth index to last
// //           -> slice(n1, n2) : from n1th index to n2-1 th index
// //           -> slice(-num) = slice(length-num)
//     let str = "ILoveCoding  "
//     console.log(str.slice(5));
//     console.log(str.slice(1,4));
//     console.log(str.slice(-5));

// // 5. replace( , ) - replaces the first occerence
//     console.log(str.replace("Love", "Do"));
//     console.log(str.replace("o", "x"));

// // 6. repeat(n)
//     console.log(str.repeat(2));

// // -------------- ARRAYS -------------------------
// let arr = ["abcxyz", "def", 234, true];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[0][3]); // the char at 3rd index of the string element at 0th index of array
// let emptyArr = [];
// console.log(emptyArr);

// // --- Array Methods ------
// // Push - add to end
// // Unshift - add to start
// // Pop - delete from end & returns it
// // Shift - delete from start & returns it
//     arr.push("new ele");
//     console.log("push:", arr);
//     arr.unshift("element");
//     console.log("unshift:",arr);
//     arr.pop();
//     console.log("pop:",arr);
//     arr.shift();
//     console.log("shift:",arr);

// // indexOf()
// // includes()
//     console.log(arr.indexOf(234));
//     console.log(arr.includes("abcxyz"))

// // concat()
// // reverse()
//     let arr2=["hii", "new", "array", 343];
//     console.log(arr.concat(arr2));
//     console.log(arr.reverse());

// // slice()
//     console.log(arr.slice(2));
//     console.log(arr.slice(6));

// // splice() - remove / replace / add elements in place
// //          - splice(n) - removes element with index >= n
// //          - splice(n, n2) - removes n2 ele from index n
// //          - splice(atrt, deleteCount, "xxyz", "abc") - adds particular ele(s) in ple of the deleted ele(s)
//     let arr3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
//     console.log(arr3.splice(6));
//     console.log("after splice: ", arr3);
//     console.log(arr3.splice(2,2));
//     console.log("after splice: ", arr3);
//     console.log(arr3.splice(2,1,"xyz", "lmn"));
//     console.log("after splice: ", arr3);

// // sort() - converts numbers to string n then sorts
//     console.log(arr3.sort());
//     console.log(arr.sort());
//     let arr4 = [23, 676, 3, 100];
//     console.log(arr4.sort()); // wont sort
   
// // ---- Array References ---------
//     let arr5=[1, 2, 3];
//     let arr5copy = arr5;
//     arr5copy.push(4);
//     console.log(arr5 == arr5copy);
//     console.log(arr5 === arr5copy);
//     console.log("arr5: ", arr5);
//     console.log("arr5copy: ", arr5copy);

// // const - elements, len of arr can be changed
// //       - cant reinitialized / assigned the array
//     const arr7 =[10, 20, 30];
//     arr7.push(60); // alowed
//     // arr7 = [10, 20, 30 ]; // led to error 

// ------ Multi dimentional arrays ---------------------------
let nums = [ [1, 2], [3, 4], [5, 6]];
console.log(nums);
console.log(nums[1][0]);
let game = [['x', null, 'o'],
            [null, 'x', null],
            ['o', null, 'x'] ];
console.log(game);
game[0][1] = 'o';
console.log(game);