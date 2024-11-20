const mongoose=require('mongoose')

const categoryschema=new mongoose.Schema({
    title:{type:String,required:true},
    slug:{type:String,required:true},
    description:{type:String,required:false},

},{
    timestamps:true
})

const categorymodel=mongoose.model('Category',categoryschema)

module.exports=categorymodel