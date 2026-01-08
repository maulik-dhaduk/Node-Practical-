const express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.render("register")
})
app.listen(7845,()=>{
    console.log("Server Listen");
})