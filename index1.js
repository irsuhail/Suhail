const express=require("express"); //importing of express package
const fs=require("fs");
const app=express(); //Creating an express application or initializing the sever

app.get("/api",(request,response)=>{

    const data=fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            response.send(err);
        }
        response.send(data);
    });

   
})

const PORT=4000;


app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}');
})
