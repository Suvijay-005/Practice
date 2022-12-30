const express=require("express");
var path=require("path");
const app=express();

app.get("/",function(req,resp){

    resp.send("Summer of 69");
});

app.get("/home",function(req,res){

    res.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen(8000);
console.log("Server listening at port 8000");
