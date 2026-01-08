const mongoose = require("mongoose")

const User = mongoose.Schema({
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

const Post = mongoose.Schema({
    title:{
        type:"String"
    },
    content:{
        type:"String"
    }
})
const User_model = mongoose.model("users",User)
const Post_model = mongoose.model("Posts",Post)
module.exports = {User_model,Post_model}