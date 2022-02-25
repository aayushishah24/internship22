const mongoose = require("mongoose")

//schema
let TaskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    totalHours:{
        type:Number
    },
    utilizedHours:{
        type:String
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    },
    module:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module"
    }
})

let TaskModel = mongoose.model("task",TaskSchema)
module.exports = TaskModel