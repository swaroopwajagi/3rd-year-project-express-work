const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ele2 = Schema({
    imageurl:{type:String,},
    bookname:{type:String,},
    author:{type:String,},
    price:{type:String}
})

module.exports=mongoose.model('ele2',ele2);
