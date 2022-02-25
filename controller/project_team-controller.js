const res = require("express/lib/response")
const Project_TeamModel = require("../model/project_team-model")
const Project_teamSchema = require("../model/project_team-model")


module.exports.addteam = function(req,res){
    let user = req.body.user
    let project = req.body.project

    let team = new Project_teamSchema({
        user:user,
        project:project
    })

team.save (function(err,success){
    if (err) {
        res.json({
            msg:"SMW",
            status:-1,
            data:err
        })
        
    } else {
        res.json({
            msg:"User added successfully",
            status:200,
            data:success
        })
        
    }
})
}
module.exports.getAllProjectTeam=function(req,res){
    Project_TeamModel.find({project:req.query.projectId}).populate("user").populate("project").exec(function(err,success){
         if (err) {
             res.json({
                 msg:"SMW",
                 status:-1,
                 data:err
             })
             
         } else {
             res.json({
                 msg:"Project team retrived",
                 status:200,
                 data:req.body
             })
             
         }
    })
}

//delete
module.exports.deleteProjectTeam= function (req,res) {
    let project_teamId = req.params.project_teamId

    Project_TeamModel.deleteOne({"_id":project_teamId},function (err, data) {
        if (err) {
            res.json({
                msg:"SMW",
                status: -1,
                data:err
            })
            
        } else {
            res.json({
                msg:"project_teamId removed",
                status:200,
                data: data
            })
            
        }
        
    })
}
