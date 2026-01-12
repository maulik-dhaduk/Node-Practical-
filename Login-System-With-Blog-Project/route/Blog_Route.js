const express = require("express")
const {register,blog_post,Add_Blog_Post,Delete_Blog_Post,Get_Edit_Blog_Post,Edit_Blog_Post_Data} = require("../controller/Blog_Controller")
const passport = require("passport")
const isAuth = require("../middleware/isAuth");

const User_Route = express.Router()
User_Route.post("/register",register);
User_Route.post("/blog_post",passport.authenticate("local"),blog_post);
User_Route.get("/blog_post", isAuth, blog_post);
User_Route.post("/Add_Post", isAuth, Add_Blog_Post);
User_Route.get("/del", isAuth, Delete_Blog_Post);
User_Route.get("/edit", isAuth, Get_Edit_Blog_Post);
User_Route.post("/edit_blog_post", isAuth, Edit_Blog_Post_Data);

module.exports = User_Route