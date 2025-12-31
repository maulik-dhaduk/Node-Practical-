const movie_model = require("../model/movie_collection")

const Add_Movie = async (req, res) => {
    if (!req.body) {
        return res.send("Request body is empty.")
    }

    const { title, genre } = req.body

    if (!title || !genre) {
        return res.send("Required fields are missing.")
    }

    try {
        const data = await movie_model.create(req.body)
        return res.send(data)
    } catch (error) {
        return res.send({
            message: "Failed to create the record",
            error: error.message
        })
    }
}

const Show_Movie = async (req, res) => {
    try {
        const data = await movie_model.find({})
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

const Update_Movie = async (req, res) => {

    if (!req.body) {
        res.send("Request body is empty.")
    }

    try {
        const id = req.params.id
        const data = await movie_model.findByIdAndUpdate(id, req.body, { new: true })
        return res.send(data)
    }
    catch (error) {
        return res.send({
            message: "Failed to update the record.",
            error: error.message
        })
    }
}

const Delete_Movie = async (req, res) => {
    try {
        await movie_model.findByIdAndDelete(req.params.id)
        return res.send("Data successfully deleted.")
    }
    catch (error) {
        return res.send({
            message: "Failed to delete the record.",
            error: error.message
        })
    }
}

module.exports = { Add_Movie, Show_Movie, Update_Movie, Delete_Movie }