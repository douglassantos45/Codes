const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//Created table of Category
const Category = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now() //Value default
    }
});

mongoose.model('category', Category);