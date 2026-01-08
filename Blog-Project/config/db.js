const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/blog_app")

const db = mongoose.connection

db.on("connected",()=>{
    console.log("Database Connected successfully");
})