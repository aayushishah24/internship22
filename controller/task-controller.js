const { isRequired } = require("nodemon/lib/utils")
const TaskModel = require("../model/task-model")
const TaskSchema = require("../model/task-model")

//schema
module.exports.addTask = function(req,res){
    let taskName = req.body.taskName
    let description = req.body.description
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let totalHours = req.body.totalHours
    let utilizedHours = req.body.utilizedHours
    let project = req.body.project
    let status = req.body.status
    let module = req.body.module


    let task = new TaskSchema({
        taskName:taskName,
        description:description,
        startDate:startDate,
        endDate:endDate,
        totalHours:totalHours,
        utilizedHours:utilizedHours,
        project:project,
        status:status,
        module:module
    })
    task.save(function(err,success){
        if (err) {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"Task save successfully",
                status:200,
                data:success
            })
        }
    })
}

//getAll
module.exports.getAllTask = function(req,res){
    TaskModel.find().populate("project").populate("module").populate("status").exec(function(err,success){
         if (err) {
             res.json({
                 msg:"Something went wrong",
                 status:-1,
                 data:err
             })
             
         } else {
             res.json({
                 msg:"Task retrived",
                 status:200,
                 data:success
             })
         }
    })
}

//delete
module.exports.deleteTask = function(req,res){
        let TaskId = req.query.taskId
        
       
    TaskModel.deleteOne({"_id":TaskId},function(err,success){
        if (err) {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"task removed",
                status:200,
                data:success
            })
        }
        
    })
}

//update
module.exports.updateTask = function(req,res){
    let TaskId = req.body.TaskId
    let taskName = req.body.taskName
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let description = req.body.description
    let totalHours = req.body.totalHours
    let utilizedHours = req.body.utilizedHours
    let project = req.body.project
    let status = req.body.status
    let module = req.body.module

    TaskModel.updateOne({"_id":TaskId},{taskName:taskName,startDate:startDate,endDate:endDate,description:description,totalHours:totalHours,utilizedHours:utilizedHours,project:project,status:status,module:module},function(err,success){
        if (err) {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"updated successfully",
                status:200,
                data:success
            })
        }
    })
}