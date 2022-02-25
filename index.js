const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-contoller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const projectcontroller = require("./controller/project-controller")
const project_teamcontroller = require("./controller/project_team-controller")
const statuscontroller = require("./controller/status-controller")
const project_modulecontroller = require("./controller/project_module-controller")
const taskcontroller = require("./controller/task-controller")
const user_taskcontroller = require("./controller/user_task-controller")
const prioritycontroller = require("./controller/priority-controller")


const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/ecom',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllroles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)



//user
app.post("/user",userController.addUser)
app.get("/user",userController.getAllUsers)
app.delete("/user/:userId",userController.deleteUser)
app.put("/user",userController.updateUser)
app.post("/login",userController.login)

//project
app.post("/project",projectcontroller.addProject)
app.get("/project",projectcontroller.getAllProject)
app.delete("/project",projectcontroller.deleteProject)
app.put("/project",projectcontroller.updateProject)

//project_team
app.post("/project_team",project_teamcontroller.addteam)
app.get("/project_team",project_teamcontroller.getAllProjectTeam)
app.delete("/project_team/:project_teamId",project_teamcontroller.deleteProjectTeam)

//status
app.post("/status",statuscontroller.addstatus)
app.get("/status",statuscontroller.getAllstatus)
app.put("/status",statuscontroller.updatestatus)
app.delete("/status/:statusid",statuscontroller.deletestatus)

//module
app.post("/project_module",project_modulecontroller.addmodule)
app.get("/project_module",project_modulecontroller.getAllModule)
app.delete("/project_module",project_modulecontroller.deletemodule)
app.put("/project_module",project_modulecontroller.updatemodule)

//task
app.post("/task",taskcontroller.addTask)
app.get("/task",taskcontroller.getAllTask)
app.delete("/task",taskcontroller.deleteTask)
app.put("/task",taskcontroller.updateTask)

//user-task
app.post("/user_task",user_taskcontroller.addUserTask)
app.get("/user_task",user_taskcontroller.getAllUserTask)
app.delete("/user_task/:userid",user_taskcontroller.deleteUserTask)
app.put("/user_task",user_taskcontroller.updateUserTask)



//priority
app.post("/priority",prioritycontroller.addPriority)
app.get("/priority",prioritycontroller.getAllPriority)
app.delete("/priority/:priorityid",prioritycontroller.deletePriority)
app.put("/priority",prioritycontroller.updatePriority)


//server 

app.listen(3000,function(){
  console.log("server started on 3000");  
})