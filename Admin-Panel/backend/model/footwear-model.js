const mongoose = require("mongoose");

const footwear_product = new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})

const footwear_category = new mongoose.Schema({
    name: String
})

const footwear_product_model = mongoose.model("product", footwear_product)
const footwear_category_model = mongoose.model("category", footwear_category)

module.exports = { footwear_product_model, footwear_category_model }