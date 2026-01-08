const IsAuth = async(req,res,next)=>{
    const {loginid} = req.cookies

    if(loginid){
        next()
    }
    else{
        res.redirect("/")
    }
}

module.exports = IsAuth