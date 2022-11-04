const express = require('express');
const sem6 = express();
const cg= require('../models/cg');
const esd = require('../models/esd');
const sepm = require('../models/sepm');
const fe = require('../models/fe');
const cn = require('../models/cn');
const bodyParser = require('body-parser');
sem6.use(bodyParser.json());
sem6.post('/sub1',(req,res)=>{
    const cgs = new cg ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    cgs.save();
    res.json({
        message:'data added successfully'
    })
})
sem6.get('/dbdata16',(req,res)=>{
    cg.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem6.post('/sub2',(req,res)=>{
    const esds = new esd ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    esds.save();
    res.json({
        message:'data added successfully'
    })
})
sem6.get('/dbdata17',(req,res)=>{
    esd.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem6.post('/sub3',(req,res)=>{
    const sepms = new sepm ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    sepms.save();
    res.json({
        message:'data added successfully'
    })
})
sem6.get('/dbdata18',(req,res)=>{
    sepm.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem6.post('/sub4',(req,res)=>{
    const fes = new fe ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    fes.save();
    res.json({
        message:'data added successfully'
    })
})
sem6.get('/dbdata19',(req,res)=>{
    fe.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem6.post('/sub5',(req,res)=>{
    const cns = new cn ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    cns.save();
    res.json({
        message:'data added successfully'
    })
})
sem6.get('/dbdata20',(req,res)=>{
    cn.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
module.exports=sem6;