const express = require('express');
const sem8 = express();
const dwm= require('../models/dwm');
const cis = require('../models/cis');
const ele3 = require('../models/ele3');
const ele4 = require('../models/ele4');
const bodyParser = require('body-parser');
sem8.use(bodyParser.json());
sem8.post('/sub1',(req,res)=>{
    const dwms = new dwm ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    dwms.save();
    res.json({
        message:'data added successfully'
    })
})
sem8.get('/dbdata25',(req,res)=>{
    dwm.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem8.post('/sub2',(req,res)=>{
    const ciss = new cis ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ciss.save();
    res.json({
        message:'data added successfully'
    })
})
sem8.get('/dbdata26',(req,res)=>{
    cis.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem8.post('/sub3',(req,res)=>{
    const ele3s = new ele3 ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ele3s.save();
    res.json({
        message:'data added successfully'
    })
})
sem8.get('/dbdata27',(req,res)=>{
    ele3.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem8.post('/sub4',(req,res)=>{
    const ele4s = new ele4 ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ele4s.save();
    res.json({
        message:'data added successfully'
    })
})
sem8.get('/dbdata28',(req,res)=>{
    ele4.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})

module.exports=sem7;