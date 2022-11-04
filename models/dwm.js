const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dwm = Schema({
    imageurl:{type:String,},
    bookname:{type:String,},
    author:{type:String,},
    price:{type:String}
})

module.exports=mongoose.model('dwm',dwm);