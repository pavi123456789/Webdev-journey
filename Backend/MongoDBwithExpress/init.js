const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('mongoDB connection successful');
    })
    .catch((err)=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const Chat = require('./models/chat.js');

Chat.insertMany([
    {
        from: 'neha',
        to: 'priya',
        message: 'please i need it for my tomors test',
        created_at: new Date()
    },
    {
        from: 'rahul',
        to: 'aditya',
        message: 'bro send the DBMS notes asap',
        created_at: new Date()
    },
    {
        from: 'priya',
        to: 'neha',
        message: 'sending in 5 mins, hold on',
        created_at: new Date()
    },
    {
        from: 'aditya',
        to: 'rahul',
        message: 'check ur email, sent it there',
        created_at: new Date()
    },
    {
        from: 'sanjana',
        to: 'karan',
        message: 'are you coming for the placement seminar tomorrow?',
        created_at: new Date()
    },
    {
        from: 'karan',
        to: 'sanjana',
        message: 'yeah 100%, what time does it start',
        created_at: new Date()
    },
    {
        from: 'meera',
        to: 'rohit',
        message: 'did u submit the assignment yet',
        created_at: new Date()
    },
    {
        from: 'rohit',
        to: 'meera',
        message: 'not yet lol, doing it right now',
        created_at: new Date()
    },
    {
        from: 'vivek',
        to: 'ishaan',
        message: 'gng to library, wanna join',
        created_at: new Date()
    },
    {
        from: 'ishaan',
        to: 'vivek',
        message: 'give me 10 mins im coming',
        created_at: new Date()
    }
]);

