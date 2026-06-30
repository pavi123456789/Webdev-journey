//---------------ASYNCH FUNCTION------------
// return a promise object
// async function greet() {
//     // throw "some error";
//     return "hello"; // this is the value of the promise obj
// }

// // console.log(greet());

// greet()
//     .then((result)=>{
//         console.log("Promise was resolved - ", result);
//     })
//     .catch((error) => {
//         console.log("Promise was rejected -", error);
//     })

// let demo = async () => { 
//     // throw "some error"; 
//     return 5 
// };

// demo()
//     .then( (result) => {
//         console.log("Promise was resolved - ", result);
//     })
//     .catch( (result) => {
//         console.log("Promise was rejected -", error);
//     })

//---------------AWAIT KEYWORD----------------
// pauses execution of its surrounding asych function until the promise is settled (resolved/rejected)
let h1 = document.querySelector('h1');

function colorChange(color, delay){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

async function demo2(){
    await colorChange("red", 1000);
    await colorChange("green", 1000);
    await colorChange("yellow", 1000);

    
}

demo2();


// to handel rejected using await - put the awaits in try and catch the error
function getNum() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor( Math.random() * 10) + 1;
            if(num > 3){
                reject("promise rejected")
            }
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo3() {

    try{
        await getNum();
        await getNum();
        await getNum();
    }
    catch(e){
        console.log("error caught - ", e);
    }
    
    let a = 23;
    console.group(a+34);
}

demo3();

