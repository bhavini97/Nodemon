const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(
            `<h1>
            Hello There!
            </h1>
            <br><brn>
            <h1>
            Nodemon Here!
            </h1>
            <br>
            <h1>
            Changes showing automatically
            </h1>
            `
        )
    }
})
server.listen(3000,()=>{
    console.log('server is running')
})