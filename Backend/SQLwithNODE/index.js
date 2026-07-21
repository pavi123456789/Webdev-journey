const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, '/views'));

// to use UUID package id
const { v4 : uuidv4 } = require('uuid');

// to use method-override packege
const methodOverride = require('method-override');
app.use(methodOverride('__method'))

// to parse n understand data
app.use(express.urlencoded({ extended: true}));

// to genrate fake data
let getRandomUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}


// create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test_app',
    password: 'Sql0192'
});


// // Insert new data -----------------------------------
// let q = `INSERT INTO user 
//         (id, username, email, password) 
//         VALUES ?`;

// let data = [];
// for(let i = 1; i <= 100; i++){
//     data.push(getRandomUser());
// }
// //connection query
// try{
//     connection.query(q,[data] ,
//         (err, result) => {
//             if(err) throw err;
//             console.log(result);
//         }
//     );
// }catch(err){
//     console.log(err);
// }

//connection.end();

// ----------------------------------------------------------
app.listen('8080', ()=>{
    console.log("listening to port 8080")
});

// show count of users
app.get('/', (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q, (err, result)=>{
            if (err) throw err;
            let count = result[0]['count(*)'];
            res.render('home.ejs', {count});
        });
    }catch(err){
        console.log(err);
        res.send("error");
    }
});

// show all users
app.get('/user', (req, res) => {
    let q = `SELECT id, username, email FROM user`;
    connection.query(q, (err, users) => {
        try{
            if (err) throw err;
            res.render('showUsers.ejs', { users });
        }catch(err){
            console.log(err);
            res.send("error");
        }
    });
});

//edit route
app.get('/user/:id/edit', (req, res)=> {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q, (err, result) => {
        try{
            if (err) throw err;
            let user = result[0];
            res.render('edit.ejs', { user });
        }catch(err){
            console.log(err);
            res.send("error");
        }
    });

});

// edit username
app.patch('/user/:id', (req, res)=>{
    let { id } = req.params;
    let { username: newUsername, password: formPass } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    
    connection.query(q, (err, result) => {
        try{
            if (err) throw err;
            let user = result[0];
            //console.log(user);
            if(formPass != user.password){
                res.send("Incorrect Password");
            } else{
               let q = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
               connection.query(q, (err, result) => {
                    if (err) throw err;
                    res.redirect('/user');
                });
            }
        }catch(err){
            console.log(err);
            res.send("error");
        }
    });
});

// add new user
app.get('/user/new', (req, res)=>{
    res.render('new.ejs');
});

app.post('/user', (req, res)=>{
    let {username, email, password} = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES(?, ?, ?, ? )`;
    try{
        connection.query(q,[id, username, email, password], 
            (err, result) => {
            if(err) throw(err);
            res.redirect('/');
        });
    }catch(err){
        console.log(err);
        res.send('some error');
    }
});

// delete user
app.get('/user/:id/delete', (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render('delete.ejs', {user});
        }); 
    }catch(err){
        console.log(err);
        res.send("some ERROR");
    }
});

app.delete('/user/:id', (req, res)=>{
    let {id} = req.params;
    let {password: formPass} = req.body;
    let q = `SELECT password FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let {password: dbPass} = result[0];
            if(formPass != dbPass){
                res.send('incorrect password');
            } else{
                let q = `DELETE FROM user WHERE id = '${id}'`;
                connection.query(q, (err, result) => {
                    if(err) throw err;
                    res.redirect('/');
                });
               
            }
        });

    }catch(err){
        console.log(err);
        res.send('some err');
    }
});