
function delayfunction(time){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("Promise is resolved after "+time+" ms");
        },time)
    })
}


async function asyncDelay(name){
    await delayfunction(2000);
    console.log("Hello "+name);
}

asyncDelay("deepak kumar singh");


async function division(num1,num2){
    try{
        const result = await divide(num1,num2);
        console.log("Result :-> ", result);
    }catch(err){
        console.log("Error :-> ", err);
    }finally{
        console.log("Finally block executed");
    }
}


async function mainFunction(){
    await asyncDelay("deepak kumar singh");
    await division(10,0);
    console.log("Main function executed");
}

mainFunction();