const mongoose = require("mongoose")

//schema
let ProjectModuleSchema = new mongoose.Schema({
    moduleName:{
        type:String,
        require:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    estimatedHours:{
        type:Number
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    utilizedHours:{
        type:Number
    }
})

let moduleModel = mongoose.model("module",ProjectModuleSchema)
module.exports = moduleModel