const mongoose = require('mongoose');
const Schema = mongoose.Schema; // To create Schema 

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongoose.model('Book', bookSchema); // creating the model mongoose.model(WantedModelName, ObjectsWithThisSchema);