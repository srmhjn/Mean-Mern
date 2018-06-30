var http=require('http');
var fs=require('fs');
var path=require('path');
http.createServer(function(req,res)
{
    console.log('${req.method}request for $(req.url)');
if(req.url.match("a.jpg"))
{
    var _imgPath=path.join(__dirname,req.url);
    var imgStream=fs.createReadStream(_imgPath);
    imgStream.pipe(res);
}
else
{
    res.end("404 File not Found!");
}

}).listen(2000);
console.log("File server running on port 2000");