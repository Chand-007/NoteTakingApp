const fs = require('fs')
const logger = (req,res,next)=>{
    const content = `The request URL ${req.url} at method ${req.method}\n`
    fs.appendFile('logger.txt',content,err=>{
        if(err){
            res.status(400).json({message:"Error Occured at middle ware function"})
        }
        else{
            console.log("Logged into")
            next()
        }
    })
}

module.exports=logger