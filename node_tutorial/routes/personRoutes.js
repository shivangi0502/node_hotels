const express = require('express');
const router = express.Router(); //router is like a traffic cop which knows where all the endpoints are and thus manages them

const Person = require('./../models/Person');

router.post('/', async (req,res)=>{


    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }

    // const data = req.body;  //assuming the req body contains the person data

    // ////--------OUTDATED METHOD----------------------------
    
    // //create a new person document using the mongooose model

    // // const newPerson = new person();
    // // newPerson.name  = data.name;
    // // newPerson.age  = data.age;
    // // newPerson.mobile = data.mobile;
    // // newPerson.email = data.email;
    // // newPerson.address = data.address;  //------OR-------------

    // const newPerson = new person(data);

    // //save the new person data to the database
    // newPerson.save((error,savedPerson) =>{   ////----------------this callback method in the save function is outdated
    //     if(error){
    //         console.log('error saving the person', error);
    //         res.status(500).json({error: 'internal server error'});
    //     }
    //     else{
    //         console.log('data saved successfully');
    //         res.status(200).json(savedPerson);
    //     }
    // })

})


//GET method to get the person
router.get('/', async (req,res) => {
    try{
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
});


//parameterised URL

router.get('/:workType' ,async (req,res)=>{
    try{
        const workType = req.params.workType //extract the work type from the work parameter

    
        if(workType =='chef' || workType=='manager' || workType=='waiter'){
            const response = await Person.find({work:workType});
            console.log("response fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: "invalid work type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
    
})

//PUT method ---used to update the data
router.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id; //extract the id form the url parameter
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true, //return the updated document
            runValidators: true //run mongoose validation

        })
        if(!response){
            return res.status(404).json({error: "person not found"})
        }
        console.log("data updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"})
    }
});

//delete method

router.delete('/:id', async (req,res) =>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: "person not found"})
        }
        console.log("data updated");
        res.status(200).json({message: "person deletion successful"});
    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"}); 
    }
})


module.exports = router;