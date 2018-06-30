const http=require("http");
const fs =require("fs");
const qs=require("querystring");
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
    req.on("data",function(chunk)
{
    body+=chunk;
    console.log("data");
});
  req.on("end",function()
{var ob=qs.parse(body);
    
    var obString=JSON.stringify(ob);
    res.writeHead(200,{"Content-Type":"text/html"});

    res.end(`
    <!DOCTYPE html>
    <html>
    <body>
    <h1>Your_Result</h1>
    <p>${obString}</p>
    </body>
    </html>
    `);
});
}}).listen(1000);
console.log("form server listening on port 1000");