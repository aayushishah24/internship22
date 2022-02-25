const moduleModel = require("../model/project_module-model")
const ProjectModuleSchema = require("../model/project_module-model")

module.exports.addmodule = function(req,res){
    let moduleName = req.body.moduleName
    let project = req.body.project
    let estimatedHours = req.body.estimatedHours
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let utilizedHours = req.body.utilizedHours

    let module = new ProjectModuleSchema({
        moduleName:moduleName,
        project:project,
        estimatedHours:estimatedHours,
        startDate:startDate,
        endDate:endDate,
        utilizedHours:utilizedHours
    })

    module.save = function(err,success){
        if (err) {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"Module added successfully",
                status:200,
                data:success
            })
        }
    }
}
//getAlll
module.exports.getAllModule = function(req,res){
    moduleModel.find().populate("project").exec(function(err,success){
        if (err) {
            res.json({
                msg:"SMW",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"Modules retrived",
                status:200,
                data:success
            })
            
        }
    })
}

//delete
module.exports.deletemodule = function(req,res){
    let ModuleId = req.params.ModuleId

    moduleModel.deleteOne({"_id":ModuleId},function(err,success){
        if (err) {
            res.json({
                msg:"Something Went Wrong",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"Module removed",
                status:200,//domear
                data:success
            })
        }
    })
}

//update
module.exports.updatemodule = function(req,res){
    let ModuleId = req.body.ModuleId
    let moduleName = req.body.moduleName
    let estimatedHours = req.body.estimatedHours
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let utilizedHours = req.body.utilizedHours
    let project = req.body.project

    moduleModel.updateOne({_id:ModuleId},{moduleName:moduleName,estimatedHours:estimatedHours,startDate:startDate,endDate:endDate,utilizedHours:utilizedHours,project:project},function(err,success){
        if (err) {
            res.json({
                msg:"SMW",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"updated succesfully",
                status:200,
                data:success
            })
        }
    })
}