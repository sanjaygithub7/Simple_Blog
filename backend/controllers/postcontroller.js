const postmodel=require('../models/postmodel')

// Create a post

exports.createposts=async(req,res)=>{

    try{
        const posts=await postmodel.create({
            title:req.body.title,
            content:req.body.content,
            category:req.body.category,
            author:req.body.author,
            image:req.body.image
           
        })

        res.json({
            message:"post is created successfully",
            posts
        })

    }catch(error){
        res.status(400).json({
            meassage:"unable to create post"
        })

    }
}

// GET all posts
exports.getallposts=async(req,res)=>{
    try{
        const posts= await postmodel.find({})
        res.json({
            message:"All posts are fetched",
            posts
        })


    }catch(error){
        res.status(400).json({
        message:'Unable to get the Post'
     })

    }
}

// GET Single Post

exports.getsinglepost=async(req,res)=>{

    try{
        const post= await postmodel.findById(req.params.id)
        res.json({
            message:'fetched the single post',
            post
        })

    }catch(error){
        res.status(400).json({
            message:'unable to get single product'
        })

    }
    
}

// UPDATE a post

exports.updatepost=async(req,res)=>{

    try{
        const { id } = req.params; // Get post ID from URL parameters
        const { title, content, category, author, image } = req.body; // Get updated data from request body
        const update=await postmodel.findByIdAndUpdate(id,{title,content,category,author,image})

        if(!update){
            res.status(404).json({message:'Id not found'})
        }else{
            res.json(update)
            console.log("updated ID:",req.params.id)
        }

    }catch(error){
        res.status(400).json({
            message:'Unable to update the post'
        })
    }
   
}

exports.deletepost=async(req,res)=>{

    try{
        const {id}=req.params // destruchured the id from req.params
        const deletepost=await postmodel.findByIdAndDelete(id)

        if(!deletepost){
            res.status(404).json({message:"error occured in deletion"})
        }else{
            res.status(200).json({message:"item deleted successfully",DeletedID:`Deleted ID is ${req.params.id}`})
        }



    }catch(error){
        res.json({
            message:"Unable to delete"
        })

    }

   

}





