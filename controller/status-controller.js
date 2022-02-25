
const { status } = require("express/lib/response")
const statusModel = require("../model/status-model")
const statusSchema = require("../model/status-model")

module.exports.addstatus = function(req,res){
    let statusname = req.body.statusname
    


    let status = new statusSchema({
        statusname:statusname,
        
    })

    status.save(function(err,success){
        if (err) {
            res.json({
                msg:"SMW",
                status:-1,
                data:err
            })
            
        } else {
           res.json({
               msg:"status added",
               status:200,
               data:success
           })            
        }
    })
}
module.exports.getAllstatus = function(req,res){
    statusModel.find(function(err,success){
        if (err) {
            res.json({
                msg:"Something went Wrong",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"data retrived",
                status:200,
                data:req.body
            })
            
        }
    })
}

//update
module.exports.updatestatus = function(req,res){
    let statusid = req.body.statusid
    let statusname = req.body.statusname
    

    statusModel.updateOne({_id:Statusid},{statusname:statusname},function(err,data){
        if (err) {
            res.json({
                msg:"Something Went Wrong",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"updated status",
                status:200,
                data:req.body
        })
            
        }
    })
}

//delete
module.exports.deletestatus = function(req,res){   //change projectid to status =id or pass url as projectid insted of statusid
    let StatusId = req.params.StatusId


    statusModel.deleteOne({"_id":StatusId},function(err,data){
        if (err) {
            res.json({
                msg:"SMW",
                status:-1,
                data:err
            })
            
        } else {
            res.json({
                msg:"delete success",
                status:200,
                data:data
            })
        }
    })
}