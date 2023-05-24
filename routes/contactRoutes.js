const express = require('express')
const router = express.Router()
const Contact =require ('../models/contactShema')

// POST METHODE
router.post('/users',async(req,res)=>{
    try{
        const newContact = new Contact(req.body)
        await newContact.save()
   res.status(200).json({msg:"success",newContact })
   
    }catch(err) {res.status(500).json({msg:err.message})}
} )
//get methode
router.get('/users',async(req,res)=>{
    try{
        const newContact = await Contact.find()
        
        
   res.status(200).json({msg:"success",newContact })
   
    }catch (err) {res.status(500).json({msg:err.message})}
} )


module.exports =router