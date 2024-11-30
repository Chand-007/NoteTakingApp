require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const NotesRoute = require('./routes')
const logger = require('./logger')

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/',(req,response)=>{
    return response.status(202).send(`Welcome to note taking application`)
})

app.use('/notes',NotesRoute)

const connectToDatabase = async ()=>{
    try{
        await mongoose.connect(process.env.mongoDBURL)
        console.log("Connected to Database")
        app.listen(process.env.PORT,()=>{
            console.log(`Backend Server Listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log(error)
    }
}

connectToDatabase()