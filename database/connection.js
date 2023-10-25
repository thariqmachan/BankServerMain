const mongoose=require("mongoose")


//process - env file ne handle chyne oru module aahn 
mongoose.connect(process.env.BASE_URL,{
    // to get rid of network parser issue  
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("mongodb atlas conected");
}).catch(()=>{
    console.log("stopped");
})