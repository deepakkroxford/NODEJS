// understanding the file handling how we can perform operations with the file 

const fs = require('fs');
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
fs.appendFileSync('./test.txt',`hey brother\n`);
