var http=require("http");
var fs =require("fs");
http.createServer(function(req,res)
{
    console.log(req.method);
    if(req.method=="GET")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./form.html").pipe(res);
    }
    else if(req.method=="POST")
    {
    var body="";
    req.on("data",function(chunck)
{
    body+=chunck;
});
   req.on("end",function()
{
res.end(`Data Entered in form => ${body}`);
}); 
}}).listen(1000);
console.log("form server listening on port 1000");