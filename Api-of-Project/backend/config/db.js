const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Product-role")

const db = mongoose.connection

db.on("connected",()=>{
    console.log("Database Connected Successfully.");
})
