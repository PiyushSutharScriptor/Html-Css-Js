const http = require('http');
const port = 5000;
const myServer = http.createServer((req,res)=>{
    res.end("Hellow world")
}).listen(port ,()=>{
    console.log("Server Running")
});