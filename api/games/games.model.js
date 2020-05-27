const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gamesSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: false
    },
    categories: [{
        name: {
            type: String,
            unique: false,
            required: false
        }
    }]
})

module.exports = gamesSchema;