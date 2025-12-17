let express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.static(__dirname+'/public'))

app.get("/index",(req,res)=>{

    try {
        res.render("index")
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }

})

app.listen(1230,()=>{
    console.log("Server Listen");
})