require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const NotesRoute = require('./routes')

app.use(cors())
app.use(express.json())

app.get('/',(req,response)=>{
    return response.status(202).send(`Welcome to note taking application`)
})

app.use('/notes',NotesRoute)

const connectToDatabase = async ()=>{
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/", {useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to Database")
        app.listen(5000,()=>{
            console.log(`Backend Server Listening on port 5000`)
        })
    }
    catch(error){
        console.log(error)
    }
}

connectToDatabase()