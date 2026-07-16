// let n = 6;
// for (let i = 0; i < n; i++){
//     console.log(i);
// }
// // to run in terminal -> node filename.js

// //----------------PROCESS---------------------------
// // Its an object
// // provides info about, and control over, current Node.js process
// // process.argv -> return array of comand-line args, when process was launched

// console.log(process.argv);

// let args = process.argv;
// for(let i = 2; i < args.length; i++){
//     console.log("Heloo " + args[i]);
// }


// ------------------- MODULE ------------------
// to use another files functions in this file
// module.exports - obj
// require() - function to include external modules that are in sepreate file


// when no export, we get {} i.e empty object
// const math = require("./math");
// console.log(math);
// console.log(math.sum(3,5));

// to export from different directory ==>
// create a file name index.js (name has to be index)
// require all the modules that are exported by the other files in the same directory
// store this in another module.exports
// require this module.export in the file

// const fruits = require("./Fruits");
// console.log(fruits);


// ---------------------------- NPM-----------------------
// node package manager
// node-modules - folder contains evry installed dependancy for your project
// package-lock.json - it records th exact version of evry installed dependancy
// package.json - file contains deecriptive and functional metadata (data on data)
// npm init - to initialize package.json
// if we have package.json then we can alwasy reinstall node-modules
// to install package globally -> install npm -g <package_name>
//                             -> npm link <package-name>



//-----------------Require vs Import-----------------------
// in a file only do one either import or require, not both togther
// to use import need to have package.json file, wwith "type": "module"
// using import we can selectively load only pieces we need
// loading is asynchronous for import

import {sum, PI} from "./math.js";
console.log(sum(7,2) , PI);

import { generate} from "random-words";
console.log(generate());