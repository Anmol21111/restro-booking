const express = require('express');
const router = express.Router();

const Model = require('../models/orderModel');

router.post('/add',(req,res) => {
    new Model(req.body).save()
    .then((result) => {
        res.json(result);

    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getall',(req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})


router.get('/getbyemail/:email',(req,res) => {
    console.log(req.params.email);
    // res.send('response from get by email');

    Model.find({email:req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})


router.get('/getbyid/:id',(req,res) => {
    console.log(req.params.id);
    
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})


router.delete('/delete/:id',(req,res) => {
    console.log(req.params.id);
    
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})
router.put('/update/:id',(req,res) => {
    console.log(req.params.id);
    
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

module.exports = router;