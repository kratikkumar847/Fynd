var http = require('http');
var fs = require('fs');
var path = require('path')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile("./public/index2.html", "utf-8", (err,data)=>{
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.end(data);
        });
    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "utf-8");
        res.writeHead(200, {"Content-Type" : "text/css"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type" : "image/png"});
        fileStream.pipe(res);
    }
    else {
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.end("No Page Found")
    }
})

server.listen(3000, ()=>{
    console.log('Server is listeing at 3000....')
})