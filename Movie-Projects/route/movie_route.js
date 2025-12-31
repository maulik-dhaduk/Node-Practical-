const express = require("express")

const { Add_Movie, Show_Movie, Update_Movie, Delete_Movie } = require("../controller/movie_controller")

const movie_route = express.Router()

movie_route.post("/add",Add_Movie)
movie_route.get("/show",Show_Movie)
movie_route.patch("/:id",Update_Movie)
movie_route.delete("/:id",Delete_Movie)

module.exports = movie_route