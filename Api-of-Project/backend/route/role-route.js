const { register, login, Auth, add_category,show_category,add_product,show_product} = require("../contoller/role-controller")
const express = require("express")
const adminOnly = require("../middleware/User-auth");
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

const role_route = express.Router()

role_route.post("/register",register)
role_route.post("/login",login)
role_route.post("/category", Auth, adminOnly, add_category)
role_route.get("/category", show_category)
role_route.post("/product", Auth, adminOnly, upload, add_product)
role_route.get("/product", show_product)

module.exports = role_route