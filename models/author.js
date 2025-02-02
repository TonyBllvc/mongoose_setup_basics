const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema and model
const BookSchema = new Schema({
    title: String,
    pages: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

const Author = mongoose.model('uncle', AuthorSchema)

module.exports = Author;