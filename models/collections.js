// create model 

// import mongoose 
const mongoose=require("mongoose")

// schema define - fields nd values of model (collection)
const usersSchema=new mongoose.Schema({
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transactions:[]
})

// model  -collection name 
 const users=new mongoose.model("users",usersSchema)


// export model - to import in another files 
module.exports=users