// to inlcude and use express
const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('listening to port 8080')
})

// to inlcude ejs files from views folder
const path = require('path');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to inlcude css, js from public folder
app.use(express.static(path.join(__dirname, "public")));

// to use method-override packege
const methodOverride = require('method-override');
app.use(methodOverride('__method'));

// to parse n understand data
app.use(express.urlencoded({ extended: true}));

// to include mongoose and use it
const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('mongoDB connection successful');
    })
    .catch((err)=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
//--------------------------------------------
const Chat = require('./models/chat.js');
//----------------------------------------------
app.get('/', (req, res) => {
    res.send("working");
});

app.get('/chats', async (req, res) => {
   let chats = await Chat.find().sort({ created_at: -1 }); // show latest chats first
   res.render('index.ejs', {chats});
});

app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/chats', (req, res) => {
    let {from, to, message} = req.body;

    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });

    newChat.save()
    .then((res) => console.log("chat saved"))
    .catch((err) => console.log(err));

    res.redirect('/chats');
});

app.get('/chats/:id/edit', async (req, res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render('edit.ejs', {chat})
});

app.put('/chats/:id',async (req, res) => {
    let {id} = req.params;
    let {message: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, 
        {message: newMsg, created_at: new Date()},
        {runValidators: true, returnDocument: 'after'} );
    res.redirect('/chats');
});

app.delete('/chats/:id', async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
})