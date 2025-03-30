/*
Callbacks are the function that are passed as the argument to another function.
*/
const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname,'example.txt');


function greeting(name,callback){
    // after the execution of this function the callback function will be executed
    console.log("Hello " + name);
    callback();
}


function greetUser(){
       console.log("good after noon");
}
greeting("deepak kumar singh", greetUser);

fs.readFile(filepath,'utf8',(err,data)=>{
    if(err){
        console.log("Error reading file", err);
        return;
    }else{
        console.log("File content :-> ", data);
    }
})