const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ele4 = Schema({
    imageurl:{type:String,},
    bookname:{type:String,},
    author:{type:String,},
    price:{type:String}
})

module.exports=mongoose.model('ele4',ele4);
