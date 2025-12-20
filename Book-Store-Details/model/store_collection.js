const mongoose = require("mongoose")

let book = mongoose.Schema({
        name:{
            type:"String"
        },
        author:{
            type:"String"
        }
})

const store_model = mongoose.model("book",book)

module.exports = store_model