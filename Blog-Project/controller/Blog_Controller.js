const {User_model,Post_model} = require("../model/Blog_Model")

const Blog = async(req,res)=>{
    try {
        const Show_Post = await Post_model.find({})
        return res.render("Blog",{Show_Post})
    } catch (error) {
        return res.send({
            message: "Failed to fetch data.",
            error: error.message
        })
    }
}

const SignUp = async (req,res)=>{

    try{
        await User_model.create(req.body)
        return res.render("SignIn")
    } catch(error){
        return res.send({
            message: "Failed to create the record",
            error: error.message
        })
    }
}

const SignIn = async (req,res)=>{
    const{username,password} = req.body
    let data = await User_model.findOne({username:username})

    if(!data){
        return res.send("username not found")
    }
    if(data.password != password){
        return res.send("password not match")
    }
    return res.cookie("loginid",data._id).redirect("Blog")
}

const Add_Post = async (req,res)=>{

    try{
        await Post_model.create(req.body)
        return res.redirect("Blog")
    } catch (error) {
        return res.send({
            message: "Failed to create the record",
            error: error.message
        })
    }
}


const Delete_Post = async (req,res)=>{

    try{
        await Post_model.findByIdAndDelete(req.query.id)
        return res.redirect("Blog")
    }
    catch (error) {
        return res.send({
            message: "Failed to delete the record.",
            error: error.message
        })
    }
}

const Get_Edit_Post = async(req,res)=>{   
        const post_edit_data = await Post_model.findById(req.query.id)
        res.render("Edit_Post",{post_edit_data})
    }

const Edit_Post_Data = async (req, res) => {
    try{
        await Post_model.findByIdAndUpdate(req.body.id, req.body);
        res.redirect("Blog")
    }
    catch (error) {
        return res.send({
            message: "Failed to update the record.",
            error: error.message
        })
    }
}


module.exports={SignUp,SignIn,Blog,Add_Post,Delete_Post,Get_Edit_Post,Edit_Post_Data}