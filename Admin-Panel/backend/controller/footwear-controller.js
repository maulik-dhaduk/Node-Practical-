const { footwear_category_model, footwear_product_model } = require("../model/footwear-model")

const add_category = async (req, res) => {
    try {
        const data = await footwear_category_model.create(req.body)
        return res.send(data)
    } catch (error) {
        return res.send({
            message: "Failed to create the record",
            error: error.message
        })
    }
}

const show_category = async (req, res) => {

    try {
        const data = await footwear_category_model.find({})

        if (data.length == 0) {
            return res.send("No records found")
        }
        return res.send(data)

    } catch (error) {
        return res.send({
            message: "Failed to fetch data.",
            error: error.message
        })
    }
}

const add_product = async (req, res) => {
    try {
        const { title, price, categoryId } = req.body
        let image = ''

        if (req.file) {
            image = req.file.filename
        }

        const data = await footwear_product_model.create({
            title, price, categoryId, image
        })

        return res.send(data)

    } catch (error) {
        return res.send({
            message: "Failed to create the record.",
            error: error.message
        })
    }

}


const show_product = async (req, res) => {

    try {
        const data = await footwear_product_model.find({}).populate("categoryId")
        return res.send(data)
        
    } catch (error) {
        return res.send({
            message: "Failed to fetch data.",
            error: error.message
        })
    }
}

module.exports = { add_category, show_category, add_product, show_product }