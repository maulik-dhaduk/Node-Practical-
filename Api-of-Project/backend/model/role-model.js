const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema({
        email:String,
        password:String,
        role:String
})

const CategorySchema = new mongoose.Schema({
    title:String
})

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})


const Register_Model = mongoose.model("register",RegisterSchema)
const Category_Model = mongoose.model("category",CategorySchema)
const Product_Model = mongoose.model("product",ProductSchema)

module.exports = {Register_Model,Category_Model,Product_Model}