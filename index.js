//const {sum}=require("./function.js");//import
//Common js
//import & export => ES6

//fs=>file system
//const fs=require("fs");
//const process=require("process");
//fs.readFile("./ex.txt",{encoding:"utf-8"},(err,res)=>{

   // if (err) {
   //     console.log(err);
    //}else{
      //  console.log(res);

   // }
//})

//fs.writeFile("./ex.txt","Session on NEM",()=>{
   // console.log("File Written");
//})


//fs.appendFile("./ex.txt","Session on node.js",()=>{
   // console.log("File Written");
//})

//const a=sum(10,12);
//console.log(a);

const commands=process.argv;
const tasks=[];

if (commands[2]=="add-file"){
   const taskObj={
     title:commands[3],
     date:new Date().toDateString(),
     status:false
   }
   tasks.push(taskObj);

   console.log("task added successfully");
}

console.log(commands[2]);