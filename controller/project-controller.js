const res = require("express/lib/response")
const ProjectModel = require("../model/project-model")
const UserModel = require("../model/user-model")

//add projectName
module.exports.addProject = function(req,res){
    let projectName = req.body.projectName
    let description = req.body.description
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let estimatedHours = req.body.estimatedHours
    let technology = req.body.technology
    let status = req.body.status

    let project = new ProjectModel({
        projectName:projectName,
        description:description,
        startDate:startDate,
        endDate:endDate,
        estimatedHours:estimatedHours,
        technology:technology,
        status:status
    })

    project.save(function(err,data){
        if(err){
            res.json({msg:"SMW",data:err,status:-1})
        }else{
            res.json({msg:"project given",data:data,status:200})
        }
    })
}
module.exports.getAllProject=function(req,res){
    ProjectModel.find().populate("status").exec(function(err,data){
        if(err) {
            res.json({
                msg:"Something Went Wrong",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"Project ret",
                status:200,
                data:data
            })
        }
    })
    
}
//delete
module.exports.deleteProject = function(req,res) {
    let ProjectId = req.query.projectId

    ProjectModel.deleteOne({"_id":ProjectId},function(err,data){
       
        if (err) {
            res.json({
                msg:"SMW",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"project removed",
                status:200,
                data:data
            })
        }
       
   })
}

//update
module.exports.updateProject = function(req,res) {
    let projectId = req.body.projectId
    let projectName = req.body.projectName
    let description = req.body.description
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let estimatedHours = req.body.estimatedHours
    let technology = req.body.technology
    let status = req.body.status

    ProjectModel.updateOne({_id:projectId},{projectName:projectName,description:description,startDate:startDate,endDate:endDate,estimatedHours:estimatedHours,technology:technology,status:status}, function(err,data){
        if (err) {
            res.json({
                msg:"SMW",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"updated successfully",
                status:200,
                data:data
            })
            
        }
    })
}