const mongoose = require("mongoose")

const movies = mongoose.Schema({
        title: {
            type: "String"
        },
        genre: {
            type: "String"
        }
})

const movie_model = mongoose.model("movies", movies)
module.exports = movie_model