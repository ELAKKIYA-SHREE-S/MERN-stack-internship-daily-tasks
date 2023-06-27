let exp=require("express");
let app=exp();
let rou=exp.Router();
app.use(rou);
rou.get("/sece",(req,res)=>{
    res.send("get call");
})
rou.post("/",(req,res)=>{
    res.send("post call");
})
rou.patch("/",(req,res)=>{
    res.send("patch call");
})
rou.delete("/",(req,res)=>{
    res.send("delete call");
})
rou.listen(4040,()=>{
    console.log("server connected");
})

let exp=require("express");
let app=exp();

let rou=require("./router");
app.use(rou);

app.listen(4040,()=>{
    console.log("server connected");
});
