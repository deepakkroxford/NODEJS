const { rejects } = require("assert");
const { resolve } = require("path");

function delay(time){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("Promise is resolved after "+time+" ms");
        },time)
    })
}

delay(2000).then((data)=>{
    console.log("Data :-> ", data);
}
).catch((err)=>{
    console.log("Error :-> ", err);
}).finally(()=>{
    console.log("Finally block executed");
})


function divide(num1,num2){
    return new Promise((resolve,rejects)=>{
        if(num2==0){
            rejects("Cannot divide by zero");
        }
        else{
            resolve(num1/num2);
        }
    })
}

divide(10,0).then((data)=>{
    console.log("Data :-> ", data);
}).catch((err)=>{
    console.log("Error :-> ", err);
}).finally(()=>{
    console.log("Finally block executed");
})
