const express = require('express');
const sem7 = express();
const compiler= require('../models/compiler');
const ai = require('../models/ai');
const ele1 = require('../models/ele1');
const ele2 = require('../models/ele2');
const bodyParser = require('body-parser');
sem7.use(bodyParser.json());
sem7.post('/sub1',(req,res)=>{
    const compilers = new compiler ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    compilers.save();
    res.json({
        message:'data added successfully'
    })
})
sem7.get('/dbdata21',(req,res)=>{
    compiler.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem7.post('/sub2',(req,res)=>{
    const ais = new ai ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ais.save();
    res.json({
        message:'data added successfully'
    })
})
sem7.get('/dbdata22',(req,res)=>{
    ai.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem7.post('/sub3',(req,res)=>{
    const ele1s = new ele1 ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ele1s.save();
    res.json({
        message:'data added successfully'
    })
})
sem7.get('/dbdata23',(req,res)=>{
    ele1.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem7.post('/sub4',(req,res)=>{
    const ele2s = new ele2 ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ele2s.save();
    res.json({
        message:'data added successfully'
    })
})
sem7.get('/dbdata24',(req,res)=>{
    ele2.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})

module.exports=sem7;