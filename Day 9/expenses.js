let mongoose=require("mongoose");

let expenseSchema=mongoose.Schema({
    title:{type:String},
    amount:{type:Number},
    date:{type:String},
});
//exporting the model
module.exports=mongoose.model("expenses",expenseSchema);
