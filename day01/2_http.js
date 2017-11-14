const http = require('http');

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end('test...');
});

server.listen('3000');

