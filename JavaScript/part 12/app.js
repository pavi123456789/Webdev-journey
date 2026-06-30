// JSON - Java Script Object Notation
// API - Application Programming Interface
// Ajax - Asynchronus JavScript and XML



let jsonRes = 
'{"fact":"Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.","length":110}';
// console.log(jsonRes);

let validRes = JSON.parse(jsonRes); // string data to JS obj
// console.log(validRes);

let obj = {
    name: "abc",
    marks: 23,
};
// console.log(obj);

let valid = JSON.stringify(obj); // JS obj to string
// console.log(valid);

// Status code
// 200 - ok
// 404 - Not found
// 400 - Bad Request
// 500 - Internal Server Error

// Query string
// https://search.brave.com/search?q=harry+porter
// q is key, harry+porter is value


//----------------FETCH-----------------
// fetch(url)

let url = "https://catfact.ninja/fact" ; 

// fetch(url) // returns a promise
//     .then( (res)=>{
//        return res.json();
//     })
//     .then((data) => {
//         console.log("data 1: ", data);
//         return fetch(url);
//     })
//     .then( (res)=>{
//        return res.json();
//     })
//     .then((data) => {
//         console.log("data 2: ", data);
//     })
//     .catch( (err)=>{
//         console.log(err);
//     })

//--------------------AWAIT & ASYNC-----------------
async function getFacts() {
    try{
        let res = await fetch(url);
        let valid = await res.json();
        console.log(valid);

        let res2 = await fetch(url);
        let valid2 = await res2.json();
        console.log(valid2);
    }catch(e){
        console.log('error - ', e);
    }
    
    console.log("bye");
}

getFacts();