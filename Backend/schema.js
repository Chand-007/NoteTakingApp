const mongoose = require('mongoose')
const {Schema} = mongoose

const noteSchema = new Schema({
    topic:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    }
},{
    timestamps:true
}
)

module.exports = mongoose.model("Notes",noteSchema)


