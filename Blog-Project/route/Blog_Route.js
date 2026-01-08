const express = require("express")
const IsAuth = require("../middleware/Auth")

const {SignUp,SignIn,Blog,Add_Post,Delete_Post,Get_Edit_Post,Edit_Post_Data} = require("../controller/Blog_Controller")

const User_Route = express.Router()

User_Route.post("/SignUp",SignUp)
User_Route.post("/SignIn",SignIn)
User_Route.get("/Blog",IsAuth,Blog)
User_Route.post("/Add_Post",Add_Post)
User_Route.get("/del",IsAuth,Delete_Post)
User_Route.get("/edit",IsAuth,Get_Edit_Post)
User_Route.post("/Edit_Post",Edit_Post_Data)

module.exports = User_Route