const store_model = require("../model/store_collection");

const add_data = async (req, res) => {

    if (!req.body) {
        return res.send("Request body is empty.")
    }

    const { name, author } = req.body;
    if (!name || !author) {
        return res.send("Required fields are missing.")
    }

    try {
        const data = await store_model.create(req.body);
        return res.send(data)
    } catch (error) {
        return res.send({
                message: "Failed to create the record",
                error: error.message
        })
    }
}

const show_data = async (req, res) => {
    try {
        const data = await store_model.find({});

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


const update_data = async (req, res) => {

    const id = req.params.id
    try{
        if (!req.body) {
            return res.send("Request body is empty.");
        }
        const data = await store_model.findByIdAndUpdate(id, req.body, { new: true });
        return res.send(data)

    } catch (error) {
        return res.send({
            message: "Failed to update the record",
            error: error.message
        })
    }
}

const delete_data = async (req, res) => {

    try{
        const data = await store_model.findByIdAndDelete(req.params.id);
        return res.send("Data successfully deleted");
    } catch (error){
        return res.send({
            message: "Failed to delete the record",
            error: error.message
        })
    }
}

module.exports = { add_data, show_data, update_data, delete_data };
