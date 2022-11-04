const express = require('express');
const sem4 = express();
const dmgt= require('../models/dmgt');
const ami = require('../models/ami');
const toc = require('../models/toc');
const dspd = require('../models/dspd');
const imfl = require('../models/imfl');
const bodyParser = require('body-parser');
sem4.use(bodyParser.json());
sem4.post('/sub1',(req,res)=>{
    const dmgts = new dmgt ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    dmgts.save();
    res.json({
        message:'data added successfully'
    })
})
sem4.get('/dbdata6',(req,res)=>{
    dmgt.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem4.post('/sub2',(req,res)=>{
    const amis = new ami ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    amis.save();
    res.json({
        message:'data added successfully'
    })
})
sem4.get('/dbdata7',(req,res)=>{
    ami.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem4.post('/sub3',(req,res)=>{
    const tocs = new toc ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    tocs.save();
    res.json({
        message:'data added successfully'
    })
})
sem4.get('/dbdata8',(req,res)=>{
    toc.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem4.post('/sub4',(req,res)=>{
    const dspds = new dspd ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    dspds.save();
    res.json({
        message:'data added successfully'
    })
})
sem4.get('/dbdata9',(req,res)=>{
    dspd.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem4.post('/sub5',(req,res)=>{
    const dspds = new dspd ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    dspds.save();
    res.json({
        message:'data added successfully'
    })
})
sem4.get('/dbdata10',(req,res)=>{
    imfl.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
module.exports=sem4;