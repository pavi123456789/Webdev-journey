
//--------------CALL STACK------------------
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

//----------------SINGLE THREADING----------------
// at one time only one thread gets executed
// way to overcome this - callbacks - setTimeout
// this nature of executing one thing after the another is called synchronous nature
// callbacks bring asnychtonousity in JS

//-----------------CALLBACK HELL----------------
let h1 = document.querySelector('h1');

// setTimeout(()=>{
//     h1.style.color = "red";
// }, 1000);
// setTimeout(()=>{
//     h1.style.color = "orange";
// }, 2000);
// setTimeout(()=>{
//     h1.style.color = "green";
// }, 3000);
// instead of this

// function changeColor(color, delay, nextColorChaange) {
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChaange) nextColorChaange(); //if next thing to do was passed in, run it now.
//     },delay);
// }
// changeColor('red', 1000,()=>{
//     changeColor('orange', 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow",1000, ()=>{
//                 changeColor("pink",1000);
//             });
//         });
//     });
// });

//this is callback nesting => callback hell
// to deal with this we have -  Promises and async/await

// function savetoDB(data, success, failure){
//     let internetSpeed = Math.floor( Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else{
//         failure();
//     }
// }

// savetoDB("information",
//     ()=>{
//         console.log("success: data saved");
//         savetoDB("hello world",
//             ()=>{
//                 console.log("success 2: data saved");
//                 savetoDB("last data",
//                     ()=>{
//                         console.log("success 3: data saved");
//                     },
//                     ()=>{
//                         console.log("failure 3: weak connection")
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("failure 2: weak connection")
//             }
//         );
//     },
//     ()=>{
//         console.log("failure: weak connection")
//     }
// );


//-----------------PROMISES---------------
// object that represents the eventual completion(or failure) of an asynch operation and its resulting value
// resolve & reject
// methods - then() - when resolved, catch() - when rejected

function savetoDB(data){
    return new Promise( (resolved, reject) => {
        let internetSpeed = Math.floor( Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolved("success: data was saved"); // result
        } else{
            reject("failure: weak connection"); // error
        }
    });
}

// Promise Chaining - multiple then
// the last catch will catch all the rejected
savetoDB("information") 
    .then( (result) => {
        console.log("Data 1 saved ", result);
        return savetoDB("hello world") 
    }) 
    .then( (result)=>{
        console.log("Data 2 saved ", result);
        return savetoDB("more information") 
    })
    .then( (result)=>{
        console.log("Data 3 saved ", result);
    })
    .catch( (error) => {
        console.log('Promise was rejected ', error);
    });

// Practice on color change
function changeColor(color, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            h1.style.color = color;
            resolve("Color Chnaged");
        }, delay);
    })
}

let request = changeColor("red", 5000);
request
    .then( (result) => {
        console.log(result);
        return changeColor("yellow", 1000);
    })
    .then( (result) => {
        console.log(result);
        return changeColor("green", 3000);
    })
    .then( (result) => {
        console.log(result);
        return changeColor("pink", 5000);
    })
    .catch( (error) => {
        console.log(error, "Cant change Color")
    })