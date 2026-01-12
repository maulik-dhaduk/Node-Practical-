const {blog_user_model,blog_post_model} = require("../model/Blog_Model")

const blog_post = async(req,res)=>{
    try {
        const Show_Post = await blog_post_model.find({})
        return res.render("blog_post",{Show_Post})
    } catch (error) {
        return res.send({
            message: "Failed to fetch data.",
            error: error.message
        })
    }
}

const register = async (req,res)=>{

    try{
        await blog_user_model.create(req.body)
        return res.render("login")
    } catch(error){
        return res.send({
            message: "Failed to create the record",
            error: error.message
        })
    }
}

const Add_Blog_Post = async (req,res)=>{

    try{
        await blog_post_model.create(req.body)
        return res.redirect("/blog_post")
    } catch (error) {
        return res.send({
            message: "Failed to create the record",
            error: error.message
        })
    }
}


const Delete_Blog_Post = async (req,res)=>{

    try{
        await blog_post_model.findByIdAndDelete(req.query.id)
        return res.redirect("/blog_post")
    }
    catch (error) {
        return res.send({
            message: "Failed to delete the record.",
            error: error.message
        })
    }
}

const Get_Edit_Blog_Post = async(req,res)=>{   
        const post_edit_data = await blog_post_model.findById(req.query.id)
        res.render("edit_blog_post",{post_edit_data})
    }

const Edit_Blog_Post_Data = async (req, res) => {
    try{
        await blog_post_model.findByIdAndUpdate(req.body.id, req.body);
        res.redirect("/blog_post")
    }
    catch (error) {
        return res.send({
            message: "Failed to update the record.",
            error: error.message
        })
    }
}


module.exports={register,blog_post,Add_Blog_Post,Delete_Blog_Post,Get_Edit_Blog_Post,Edit_Blog_Post_Data}