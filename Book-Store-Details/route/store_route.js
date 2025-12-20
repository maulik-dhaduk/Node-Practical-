const express = require("express")

const {add_data,show_data,update_data,delete_data} = require("../controller/book_controller")

const store_route = express.Router()

store_route.post("/add",add_data)
store_route.get("/show",show_data)
store_route.patch("/:id",update_data)
store_route.delete("/:id",delete_data)

module.exports = store_route