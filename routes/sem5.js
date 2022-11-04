const express = require('express');
const sem5 = express();
const dcom= require('../models/dcom');
const oom = require('../models/oom');
const dbms = require('../models/dbms');
const daa = require('../models/daa');
const os = require('../models/os');
const bodyParser = require('body-parser');
sem5.use(bodyParser.json());
sem5.post('/sub1',(req,res)=>{
    const dcoms = new dcom ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    dcoms.save();
    res.json({
        message:'data added successfully'
    })
})
sem5.get('/dbdata11',(req,res)=>{
    dcom.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem5.post('/sub2',(req,res)=>{
    const dbmss = new dbms ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    dbmss.save();
    res.json({
        message:'data added successfully'
    })
})
sem5.get('/dbdata12',(req,res)=>{
    dbms.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem5.post('/sub3',(req,res)=>{
    const ooms = new oom ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ooms.save();
    res.json({
        message:'data added successfully'
    })
})
sem5.get('/dbdata13',(req,res)=>{
    oom.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem5.post('/sub4',(req,res)=>{
    const daas = new daa ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    daas.save();
    res.json({
        message:'data added successfully'
    })
})
sem5.get('/dbdata14',(req,res)=>{
    daa.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
sem5.post('/sub5',(req,res)=>{
    const oss = new os ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    oss.save();
    res.json({
        message:'data added successfully'
    })
})
sem5.get('/dbdata15',(req,res)=>{
    os.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
module.exports=sem5;