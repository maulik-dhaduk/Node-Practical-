const express = require("express")
const db = require("./config/db")
const book_router = require("./route/store_route")

const app = express()
app.use(express.json())

app.use("/bookstore",book_router)

app.listen(4512,()=>{
    console.log("server listen");
})