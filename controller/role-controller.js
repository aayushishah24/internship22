const RoleModel = require("../model/role-model")


module.exports.addRole = function (req,res){
   console.log(req.body.roleName);

   let role = new RoleModel({
       roleName:req.body.roleName
   })
   role.save(function(err,success){
       if(err){
           console.log(err);
           res.json({
               msg:"Something Went Wrong",
               status:-1,
               data:req.body
           })
       } else {
           res.json({
               msg:"role added",
               status:200,
               data:success
           })
       }
   })

}
   module.exports.getAllroles = function (req,res) {

    RoleModel.find(function (err,roles) {
        if (err) {
            res.json({
                meg:"Spomething Went Wrong",
                status:-1,
                data:err
            })
            
        }
        else{
            res.json({
                msg:"roles",
                status:200,
                data:roles
            })
        }
        
    })
       
   }

 //delete
 module.exports.deleteRole = function (req,res) {
     let roleId = req.params.roleId

     //delete from the role where roleId = 1
     RoleModel.deleteOne({"_id":roleId},function(err,data){
         if (err){
             res.json({
                 msg:"Something Went Wrong",
                 status:-1,
                 data:err
             })

         }
         else{
             res.json({
                 msg:"removed",
                 status:200,
                 data:data
             })
         }
     })
     
 }

 module.exports.updateRole = function(req,res){

    //update role set roleName = admin where roleId = 12121
    let roleId = req.body.roleId
    let roleName = req.body.roleName

    RoleModel.updateOne({_id:roleId},{roleName:roleName},function(err,data){
        if(err){
            res.json({
                msg:"Something Went Wrong",
                status:-1,
                data:err
            })
        }
        else{
            res.json({
                msg:"update",
                status:200,
                data:data
            })
        }
    })
 }
   
//roleName 