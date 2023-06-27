let exp=require("express");
let path=require("path");

let rou=exp.Router();

rou.get("/",(req,res)=>{
    res.send("This is a call");
});
rou.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

module.exports=rou;
