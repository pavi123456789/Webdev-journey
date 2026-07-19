const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
// to use UUID package id
const { v4 : uuidv4 } = require('uuid');

// to use method-override packege
const methodOverride = require('method-override');
app.use(methodOverride('__method'))

// to parse n understand data
app.use(express.urlencoded({ extended: true}));

// to inlcude ejs files from views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to inlcude css, js from public folder
app.use(express.static(path.join(__dirname, "public")));



//----------------------------------------------------------------

let posts = [
    {
        id: uuidv4(),
        username: "alphacollege",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Rajkumar",
        content: "Cooing is relaxing"
    },
    {
        id: uuidv4(),
        username: "linda",
        content: "Got selected for my first internship"
    }
];

// GET /posts home page
app.get("/posts", (req, res)=>{
    res.render("index.ejs", { posts });
});

//POST /posts for new post
app.get('/posts/new', (req, res)=>{
    res.render("new.ejs");
});

app.post('/posts', (req, res)=>{
    let { username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content})
    res.redirect('/posts');
});

//GET /posts/:id to show single post
app.get('/posts/:id', (req, res)=>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

// PATCH /posts/:id to update specific post
app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.patch('/posts/:id',(req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect('/posts'); 
});

//DELETE /posts/:id to delete specific post
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter( (p) => id !== p.id );
    res.redirect("/posts");
});









// -------------------------------------------------------------------
app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});