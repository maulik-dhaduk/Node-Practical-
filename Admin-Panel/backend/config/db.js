const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/footwear")

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Database Connected Successfully");
})