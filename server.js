var express=require("express");
var app=express();

app.get('/',function(req,res){
    res.end("hello world");
})

app.listen('process.env.PORT || 80',function(){
    console.log("app is listening to 80");
})



