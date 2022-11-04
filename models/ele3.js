const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ele3 = Schema({
    imageurl:{type:String,},
    bookname:{type:String,},
    author:{type:String,},
    price:{type:String}
})

module.exports=mongoose.model('ele3',ele3);
