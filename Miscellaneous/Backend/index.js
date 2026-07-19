const express = require("express");
let app = express();
const port = 8080;

//handeling post req
app.use(express.urlencoded({ extended: true})); // to read urlencoded data
app.use(express.json()); // to read json type data

app.listen(port, () => {
    console.log(`listening to port ${port}`)
});

app.get("/register", (req, res) => {
    let { user, password } = req.query; 
    res.send(`standaard GET response. Welcome ${user}`);
})

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`standaard POST response Welcom ${user}`);
})