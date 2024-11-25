const mongoose=require('mongoose')

const postschema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    category:{type:String,required:true},
    author:{type:String,required:true},
    image:String,
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}


})

const postmodel=mongoose.model('Post',postschema)

module.exports=postmodel