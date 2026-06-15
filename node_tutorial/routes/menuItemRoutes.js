const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');
const { model } = require('mongoose');


//GET method for Menu items

router.get('/', async (req,res) =>{
    try{
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
});

//post method for menu items

router.post('/', async (req,res) =>{
    try{
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log("data saved");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
});


//parameterised URL

router.get('/tasteType', async (req,res) =>{
    try{
        const tasteType = req.params.tasteType; //extract the taste type from the requested parameter
        if(tasteType=="sweet" || tasteType=="sour" || tasteType=="spicy"){
            const response = await MenuItem.find({taste:tasteType});
            console.log("data fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: "invalid taste type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})

//put method

router.put('/:id', async (req,res) =>{
    try{
        const menuId = req.params.id; //extract id from the url parameter
        const newMenuData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuId,newMenuData,{
            new:true, //return the updated document
            runValidators: true //run the moongoose validation
        })
        if(!response){
            return res.status(404).json({error: "menu item not found"});
        }
        console.log("data updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
});

//delete method

router.delete('/id', async (req,res) =>{
    try{
        const menuId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error: "menu itemm not found"});
        }
        console.log("data updated");
        res.status(200).json({message: "menu item deletion successful"});
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})


//comment addded for testing purpose
module.exports = router;

