const mongoose = require("mongoose")

//schema
let statusSchema = new mongoose.Schema({
    statusname:{
        type:String,
        required:true
    },
    
})
//module
const statusModel = mongoose.model("status",statusSchema)
module.exports = statusModel