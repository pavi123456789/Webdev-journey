const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('successfull');
    })
    .catch((err)=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, 'Price is too low for selling']
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ['fiction', 'non-fiction']
    }

});

const Book = mongoose.model('Book', bookSchema);

// let book1 = new Book({
//     title: 'MArval comic',
//     author: 'Robert Jr',
//     price: 400,
//     category: 'fiction'
// });

// book1.save();

Book.findByIdAndUpdate('6a6111adfff6056c62488660', {price: -90}, {returnDocument: 'after', runValidators: true})
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log((err.errors.price.properties.message));
    });

