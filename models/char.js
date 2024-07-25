const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema and model
const CharSchema = new Schema({
    name: String,
    weight: Number
});

const Char = mongoose.model('black', CharSchema)

module.exports = Char;