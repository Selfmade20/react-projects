const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: { type: String, required: true, trim: true},
    bookAuthor: { type: String, required: true, trim: true },
    date : { type : Date, default: Date.now }
}, {
    timestamps: false,
});

const Books = mongoose.model('Books', bookSchema); 
module.exports = Books;