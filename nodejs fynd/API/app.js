const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) =>{
    fs.readFile('userapi.json', 'utf-8', (err, data) =>{
        const obg = JSON.parse(data)
        res.writeHead(200, {"content-type":"application/json"});
        res.end(obg.name)
    })
})

server.listen(3000, ()=>{
    console.log("server is on at 3000");
})