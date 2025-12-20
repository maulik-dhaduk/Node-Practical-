const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/book_store_management")

const db = mongoose.connection

db.on("connected",()=>{
    console.log("Database connected successfully!");
})
