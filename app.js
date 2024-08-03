const express=require("express")
require("../src/db/connect")
const participantData=require("../src/models/mens");
const app=express();
const port =process.env.PORT||3000;
app.use(express.json());

app.post("/mens",async(req,res)=>{
    try{
const addingData=new participantData(req.body)
console.log(req.body)
const insertMen = await addingData.save();
console.log(insertMen)
    }
catch(err){
res.status(400).send(err);
}
})
app.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getmen=await participantData.findById(_id);
        res.send(getmen);
        
    }
catch(err){
res.status(404).send(err);
}
})
app.patch("/mens/:id/patch",async(req,res)=>{
    try{
        const _id=req.params.id;
        const patchmen=await participantData.findByIdAndUpdate(_id);
            
    
        res.send(patchmen);
        
    }
catch(err){
res.status(500).send(err);
}
})
app.delete("/mens/:id/delete",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deleteman=await participantData.findByIdAndDelete(_id,req.body);
            
    
        res.send(deleteman);
        
    }
catch(err){
res.status(400).send(err);
}
})


app.listen(port,()=>{
    console.log(`connection is live at port ${port} `)
})