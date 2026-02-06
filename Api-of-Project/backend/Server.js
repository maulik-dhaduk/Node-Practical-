const express = require("express")
const db = require("./config/db")
const role_route = require("./route/role-route")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', express.static("upload"))
app.use(role_route)

app.listen(4512,()=>{
    console.log("Server Listen");
})