const mongoose=require('mongoose')

const connectdatabase=()=>{
  mongoose.connect('mongodb://localhost:27017/blog-app')
  .then((con)=>{
     console.log("Mongodb connected to host:",con.connection.host)
  })
}

module.exports=connectdatabase