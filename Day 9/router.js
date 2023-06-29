let exp=require("express");
//let path=require("path");
let Expenses=require("../models/expenses");
let rou=exp.Router();
rou.post("/expense/create",createExpense);
//add routes
/*rou.get("/",(req,res)=>{
 
console.log("router connected");
    res.send("router connected");
})*/
async function createExpense(req,res){
    let body=req.body;
    let newExpense=new Expenses({
        title:body.title,
        amount:body.amount,
        date:body.date,
    })
    await newExpense.save();
    res.json("Expenses created");
}
module.exports=rou;
