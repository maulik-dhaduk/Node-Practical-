const mongoose = require("mongoose")

const blog_user = mongoose.Schema({
    username:{
        type:"String"
    },
    password:{
        type:"String"
    },
    email:{
        type:"String"
    }
})

const blog_post = mongoose.Schema({
    title:{
        type:"String"
    },
    content:{
        type:"String"
    }
})
const blog_user_model = mongoose.model("blog_user",blog_user)
const blog_post_model = mongoose.model("blog_post",blog_post)
module.exports = {blog_user_model,blog_post_model}