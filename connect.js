const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/olymics").then(()=>{
    console.log("connection is succesufull");
}).catch(()=>{
    console.log("No connection")
})