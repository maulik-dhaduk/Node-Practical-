const { Register_Model, Category_Model, Product_Model } = require("../model/role-model")
const jwt = require("jsonwebtoken")


const register = async (req, res) => {
    try {
        const data = await Register_Model.create(req.body)
        return res.json(data)

    } catch (error) {
        return res.status(500).json({
            message: "Failed to create the record",
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" })
        }

        const data = await Register_Model.findOne({ email })

        if (!data) {
            return res.status(404).json({ message: "Email not found" })
        }

        if (data.password !== password) {
            return res.status(401).json({ message: "Password not match" })
        }

        const payload = {
            id: data._id,
            email: data.email,
            role: data.role || "user"
        }

        const token = jwt.sign(payload, "private-key", { expiresIn: "1d" })

        return res.status(200).json({
            message: "Login successfully",
            token
        })

    } catch (error) {
        return res.status(500).json({
            message: "Failed to login",
            error: error.message
        })
    }
}

const Auth = async (req, res, next) => {

    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ message: "Token missing" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, "private-key")
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }
}


const add_category = async (req, res) => {
    try {
        const data = await Category_Model.create(req.body)
        return res.json(data)

    } catch (error) {
        return res.status(500).json({
            message: "Failed to create category",
            error: error.message
        })
    }
}


const show_category = async (req, res) => {
    try {
        const data = await Category_Model.find({})

        if (data.length === 0) {
            return res.status(404).json({ message: "No records found" })
        }

        return res.json(data)

    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch categories",
            error: error.message
        })
    }
}


const add_product = async (req, res) => {
    try {
        const { name, price, categoryId } = req.body
        let image = ""

        if (req.file) {
            image = req.file.filename
        }

        const data = await Product_Model.create({
            name,price,categoryId,image
        })

        return res.json(data)

    } catch (error) {
        return res.status(500).json({
            message: "Failed to create product",
            error: error.message
        })
    }
}


const show_product = async (req, res) => {
    try {
        const data = await Product_Model.find({}).populate("categoryId");
        return res.json(data)
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        })
    }
}


module.exports = {register,login,Auth,add_category,show_category,add_product,show_product}
