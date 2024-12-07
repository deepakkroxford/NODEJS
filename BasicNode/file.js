// understanding the file handling how we can perform operations with the file 

const fs = require('fs');
const os = require('os');
// fs.writeFileSync('./test.txt','Hey how are you ')

//Async
// fs.writeFile('./test.txt','hello world async',(err)=>{})

// // reading the file contact.txt

// const result =fs.readFileSync('./contact.txt','utf-8')
// console.log(result)

/*
when we use readfile without sync it will not return any thig
*/
// const ans = fs.readFile('./contact.txt','utf-8',(err,result)=>{
//   if(err){
//     console.log('Error',err)

//   }
//   else{
//     console.log(result)
//   }
// })

// fs.appendFileSync("./test.txt",new Date().getTime().toLocaleString());
// fs.appendFileSync('./test.txt',`hey brother\n`);


//understanding the Blocking and Non-Blocking requests 

/*
This is called the blocking operation. and give the output in same order
*/
// console.log('4');
// const blocking = fs.readFileSync('./test.txt','utf-8');
// console.log(blocking);
// console.log("42")
// console.log('hi how are you my brother')



//this is the example of non-blocking code it give the output in async mode
console.log("42")
 fs.readFile('./test.txt','utf-8',(err,res)=>{
        console.log(res) 
});
console.log('5');
console.log("2")

// Default size of the thread pool = 4 
// we can increse till the size of the core available in the machine 
// this is used to check how many no of core available in the machine 
// so in my system it is 8 
console.log(os.cpus().length)
