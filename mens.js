const express=require('express');
//const mongoose=require
const mongoose = require('mongoose');
const menschema= new mongoose.Schema(
    {

ranking:{
type:Number,
require:true,
},
Name:{
    type:String,
    require:true,
},
Country:{
        type:String,
        default:"India",
},
score:{
            type:Number,
            require:true,
},
event:{
                type:String,
                require:true,
},
}
);
const participantData =new mongoose.model("participantData",menschema)
module.exports=participantData;
