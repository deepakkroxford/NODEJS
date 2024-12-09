const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {


    //Reading the data 
    const body =[];
    req.on('data', chunk =>{
        console.log(chunk)
        console.log(`Received data: ${chunk}`);
        body.push(chunk);
    })


    req.on('end', ()=>{
        const fullbody = Buffer.concat(body).toString();
        console.log(fullbody)
        
        const parms = new URLSearchParams(fullbody);
        // const bodyObject={};
        // for(const[key, value] of parms.entries()){
        //     bodyObject[key]=value;
        // }
        // console.log(bodyObject)  // { username: 'Deepak Kumar Singh', gender:'male' }  // assuming the form fields are named as 'username' and 'gender'
       
        const bodyObject = Object.fromEntries(parms)
        console.log(bodyObject)  // { username: 'Deepak Kumar Singh', gender:'male' }  // assuming the form fields are named as 'username' and 'gender'
        // Writing the data to a file
        fs.appendFileSync('user.json', JSON.stringify(bodyObject));  
       
    })

    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});