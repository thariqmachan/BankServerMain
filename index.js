// import .env file
require("dotenv").config()


// server creation 
    // express import 
    
    // 1. import express 
    const express = require("express")
    const router = require("./routes/router")
    const cors = require("cors")
    

    // 2. create server using express
    const server = express()

    //integrate frontend
    server.use(cors())

    //3. run server
    //first set the port
    const port=5003 || process.env.port  // set the port no other than the frontend running port

    //to convert all incoming json data to js data
    server.use(express.json())

    // set router
    server.use(router)

    //import connection.js file 
    require("./database/connection")

    //run server
    server.listen(port,()=>{
        console.log(`port started at port number: ${port}`);
    })

    // node run at terminal "node index.js" , node doesnt hv automatic recompilation kazhivu 
    //we hv to change portno each time for running 2nd time 



    // apicalls resolve - post
    // server.post("/register",(req,res)=>{  // each req will hv diff path to identify which req  , two arguments mainly req,res
    //     res.send("post method working")
    // })    
    // server.post("/login",(req,res)=>{
    //     console.log(req.body.psw);
    //     res.send("login working......")
    // }) 