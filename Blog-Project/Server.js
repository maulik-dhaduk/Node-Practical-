const db = require("./config/db")
const express = require("express")
const Blog_Route = require("./route/Blog_Route")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded())

app.use(cookieParser())
app.use(session({secret: "keyboard cat", resave:true, saveUninitialized:true}))

app.use(Blog_Route)

app.get("/",(req,res)=>{
    res.render("SignUp")
})

app.get("/SignIN",(req,res)=>{
    res.render("SignIN")
})

app.listen(6400,()=>{
    console.log("Server Listen");
})