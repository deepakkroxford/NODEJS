const sumRequestHandler = (req, res) => {
    console.log("In Sum Request Handler", req.url);
    const body = [];
    req.on('data', chunk =>{
        body.push(chunk)
        console.log(`Received data: ${chunk}`);  // You can log this to debug the incoming request data.  // In this case, it will log the form data received.  // You can parse it to extract the numbers.  // For example, if form data is "num1=5&num2=10", you can extract num1 and num2 as 5 and 10.  // Then you can add them together.  // Finally, you
    });

    req.on('end', () => {
      const bodyStr = Buffer.concat(body).toString();
      const params = new URLSearchParams(bodyStr);
      const bodyObj = Object.fromEntries(params);
      const result = Number(bodyObj.first) + Number(bodyObj.second);
      console.log(result);
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
          <head><title>Practise Set</title></head>
          <body>
            <h1>Your Sum is ${result}</h1>
          </body>  
        <html>  
      `); 
      return res.end();
    });  
  }
  
  const _sumRequestHandler = sumRequestHandler;
export { _sumRequestHandler as sumRequestHandler };