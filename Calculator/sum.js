const { URLSearchParams } = require("url");

const sumrequesthandler = (req,res)=>{
        console.log("In sum request handler",req.url);
        // now we need those two number to do the sum operations
        const body=[];
        req.on('data',chunk =>{
            body.push(chunk);
            console.log(`Received data: ${chunk}`);
        })
        req.on('end',()=>{
         const bodyStr=Buffer.concat(body).toString();
         console.log(bodyStr);  // { first: '10', second: '20' }  // assuming the form fields are named as 'first' and'second'
         const params = new URLSearchParams(bodyStr);
         console.log(params);  // URLSearchParams { first: '10', second: '20' }  // assuming the form fields are named as 'first' and'second'
         const bodyObj = Object.fromEntries(params);
         console.log(bodyObj);  

         const firstNum = parseInt(bodyObj.first, 10);
         const secondNum = parseInt(bodyObj.second, 10);
         const result = firstNum+secondNum;
            console.log(`The sum is ${result}`);    
            
            res.setHeader('Content-Type', 'text/html');
            res.write(`<html>
                <body>
                    <h1>The sum is ${result}</h1>
                </body>
                </html>`);
            res.end();
        })

        
      
}

exports.sumrequesthandler = sumrequesthandler;