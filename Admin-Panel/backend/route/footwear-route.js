const { add_category, show_category, add_product, show_product } = require("../controller/footwear-controller")
const express = require("express")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage: storage }).single('image')

const footwear_route = express.Router()

footwear_route.post("/category", add_category)
footwear_route.get("/category", show_category)
footwear_route.post("/product", upload, add_product)
footwear_route.get("/product", show_product)

module.exports = footwear_route