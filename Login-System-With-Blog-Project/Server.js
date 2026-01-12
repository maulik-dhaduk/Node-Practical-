const express = require("express")
const db = require("./config/db")
const Blog_Route = require("./route/Blog_Route")
const passport = require("passport")
const LoginAuth = require("./middleware/LoginAuth")
const session = require("express-session")

const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(session({secret: 'keyboard cat', resave:true, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())

LoginAuth(passport)
app.use(Blog_Route)


app.get("/",(req,res)=>{
    res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.listen(4500,()=>{
    console.log("Server Listen");
})