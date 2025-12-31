const express = require("express")
const db = require("./config/db")
const app = express()
const movie_route = require("./route/movie_route")

app.use(express.json())
app.use("/movie",movie_route)

app.listen(7815,()=>{
    console.log("Server Listen");
})