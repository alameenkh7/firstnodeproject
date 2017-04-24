var express=require("express");
var app=express();

app.get('/home',function(req,res){
    res.send("hello world");
})

app.listen('8080',function(){
    console.log("app is listening to 3000");
})



