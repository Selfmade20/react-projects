const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    date : { type : Date, default: Date.now }
}, {
    timestamps: true,
});

const Books = mongoose.model('Books', bookSchema); 
module.exports = Books;