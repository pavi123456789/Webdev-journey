const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('successfull');
    })
    .catch((err)=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// ----------Inserting users-------------
// const user = new User({
//     name:'Dean', 
//     email: 'deanW@gmail.com',
//     age: '30',
// });

// user1.save();

// const user2 = new User({
//     name:'Sammy', 
//     email: 'sam@gmail.com',
//     age: '45',
// });
// user2.save()
//     .then((res)=>console.group(res))
//     .catch((err) => console.log(err));

// User.insertMany([
//     {name: 'Tony', email: 'tony@yahoo.com', age: 20},
//     {name: 'Peter', email:'peter@gmail.com', age: 35},
//     {name: 'Bruce', email: 'bruce@ms.com', age: 67}
// ]).then((res) => console.log(res));


//-------------- Find users ------------
// User.find({age : {$gt :40}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findOne({age : {$gt :40}}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// });

// User.findById('6a60cc457a7a40aa53e325b4').then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// });

// -----------Updating users---------
// User.findOneAndUpdate({name: 'Dean'}, {age: 40}, {returnDocument: 'after'})
//     .then((res)=>{
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.updateMany({age : {$gt : 40}}, {age: 88})
//     .then((res)=>{
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// -------------- DELETE ---------
User.deleteOne({name: 'Bruce'}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

User.deleteMany({age : {$lt : 37}}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findByIdAndDelete('6a60ce3a92a0d74200f2baf5').then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});