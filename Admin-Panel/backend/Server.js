const db = require("./config/db")
const express = require("express")
const footwear_route = require("./route/footwear-route")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', express.static("upload"))
app.use(footwear_route)

app.listen(4512, () => {
    console.log("Server listen");
})