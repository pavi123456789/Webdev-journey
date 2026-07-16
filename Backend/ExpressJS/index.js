const express = require('express');
const app = express();

// Ports are the endpoints of a network connection that is used to exchange information btwn web server and a web client
let port = 3000; // 3000 or 8080 are used to make custom server

//---------------- listen to req--------------
app.listen(port, () => {
    console.log("app is listening on port ", port);
});

//----------- recive req----------------------
// text base req is converted to object

//--------for specfic routes
// just / means home
app.get("/", (req, res) =>{
    res.send("hello i am root path");
});

// app.get("/apple", (req, res) =>{
//     res.send("apple path");
// });

// app.get("/orange", (req, res) =>{
//     res.send("orange path");
// });

// // *splat means all paths
// app.get("*splat", (req, res) => {
//     res.send("this path does not exist");
// });

//--------Path Parameters----------
app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    let htmlstr = `<h1>welcome to the page of @${username,id} </h1>`;
    res.send(htmlstr);
})

//---------------query string--------
app.get("/search", (req, res)=>{
    let { q } = req.query;
    if(!q){
        return res.send(`<h1>nothing searched<h1>`);
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});


//------- app.use reponds to every req
// app.use((req, res) => {
//     //console.log(req);
//     console.log("request recived");
//     // send response
//         let code = "<h1>Fruits</h1> <ul><li>fruits</li><li>orange</li></ul>";
//         res.send(code);
// });


