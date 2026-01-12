const {blog_user_model} = require("../model/Blog_Model");
const LocalStrategy = require("passport-local").Strategy

const LoginAuth = (passport)=>{
    passport.use(new LocalStrategy(async(username,password,done)=>{
        const user = await blog_user_model.findOne({username:username})
        if(!user){
            return done(null,false,{message:"User not found"})
        }
        if(user.password != password){
            return done(null,false,{message:"Invalid password"})
        }

        return done(null,user)
    }))

    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })

    passport.deserializeUser(async(id,done)=>{
        const user = await blog_user_model.findById(id)
        done(null,user)
    })  
}

module.exports = LoginAuth