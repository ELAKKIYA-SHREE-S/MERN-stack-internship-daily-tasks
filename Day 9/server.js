let exp=require("express");
let mongoose=require("mongoose");
let app=exp();
let router=require("./router/router");
const port=5000;
//middlewares
//to change data in the incoming request into json format
app.use(exp.json());
app.use(exp.urlencoded({extended:true}));
//to connect the roots to the express application
app.use(router);
//DB connection
mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>console.log("connected to DB🌈"));

//app.listen() at the end of file
app.listen(port,callback);
function callback(){
    console.log("connected to port"+port);
}
