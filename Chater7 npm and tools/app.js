const http=  require('http')

const server = http.createServer((req,res)=>{
    res.write("hello how are you")
    res.write("i am good what about you")
    console.log(req.url)
    res.end()
})

server.listen(3000,()=>{
    console.log('server running on port http://localhost:3000')
})