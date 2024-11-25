const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const connectdatabase=require('./config/connectDB')
const cors=require('cors')

const app=express();
const port=3000;

app.use(bodyparser.json())
app.use(cors())

connectdatabase()  // function that calls the db 

// importing routes from routes folder
const posts=require('./routes/post')
const category = require('./routes/categoryRoutes');

// using the routes
app.use('/posts', posts);
app.use('/categories', category);


app.listen(port,()=>{
    console.log("Server is running....")

})