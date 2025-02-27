const express = require('express')
const Notes = require('./schema')
const router = express.Router()


router.post('/', async(req,res)=>{
    try{
        if(!req.body.topic || !req.body.status || !req.body.notes){
            return res.status(400).send({message:"Enter all details"})
        }
        const notesVariable = {
            topic:req.body.topic,
            status:req.body.status,
            notes:req.body.notes
        }
        const notes = await Notes.create(notesVariable)
        return res.status(201).send(notes)
    }
    catch(error){
        console.log(error.message)
        return res.status(500).send({message:error.message})
    }
})



router.get('/',async (req,res)=>{
    try{
        const notes = await Notes.find({})
        return res.status(201).json({
            count:notes.length,
            data:notes
        })
    }
    catch(error){
        console.log(error.message)
        return res.status(400).send({message:error.message})
    }
})



router.get('/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const note = await Notes.findById(id)
        return res.status(201).json(note)
    }
    catch(error){
        console.log(error.message)
        return res.status(500).send({message:error.message})
    }
})

router.put('/:id', async(req,res)=>{
    try{
        if(!req.body.topic || !req.body.status || !req.body.notes){
            return res.status(500).send({message:"Send all the required details"})
        }
        const {id} = req.params
        const result = await Notes.findByIdAndUpdate(id,req.body)

        if(!result){
            return res.status(500).json({message:"Notes not found"})
        }
        return res.status(200).json({message:"Notes Updated Successfully"})
    }
    catch(error){
        console.log(error.message)
        return res.status(500).send({
            message:error.message
        })
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const result = await Notes.findByIdAndDelete(id)

        if(!result){
            return res.status(400).json({message:"Note couldn't be deleted"})
        }
        return res.status(200).send({message:"Note Deleted Successfully"})
    }
    catch(error){
        console.log(error.message)
        return res.status(404).send({message:error.message})

    }
})


module.exports = router