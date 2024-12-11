
;
const http = require('http');
const fs = require('fs')
const url = require('url');


const server = http.createServer((req,res)=>{
        const log = `${Date.now()} : ${req.url} New req is recived \n `;
        const myUrl = url.parse(req.url,true)
        console.log(myUrl);
        if(req.url==='/favicon.ico') return res.end();
             fs.appendFile('log.txt', log, (err,data) => {
                
                if(err){
                    console.error("Error saving the log",err);
                    return;  // error handling
                }else{
                    console.log("log file updated");  // success handling 
                        
    
                }
           /*
           using the url we can render the diffrent information
           */
                switch(myUrl.pathname){
                    case "/":
                        res.end("we are on the home page")
                        break;
                    case "/about":
                        /*
                        http://localhost:8000/about?myname=%22deepak%22&&age=24&&sex=male
                        so in this way we can pass the parameter and get the output 
                        */
                        const username= myUrl.query.myname;
                        const age = myUrl.query.age;
                        const sex = myUrl.query.sex;
                        res.end(`hi my name is ${username} and my age is ${age} and i am ${sex}`);
                        break;
                    default:
                        res.end("Page not found")
                        
                }
        });
        console.log(req.url);
})

server.listen(8000, ()=>{
        console.log('Server running at http://localhost:8000');
})