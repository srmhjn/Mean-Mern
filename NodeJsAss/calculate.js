var http=require("http");
var functemp=require("./functemp");
var funcrec=require("./funcrec");
http.createServer(function(req,res)
{
    if(req.url==="/t")
    {
        res.write("celcius = 36.5");
        res.write("ferhenite = 94.2");
        res.end();
    }
    else if(req.url==="/t/celtofer")
    {
       var f =  functemp.celtofer(c);
        res.end(f.toString());
    }
    else if(req.url==="/t/fertocel")
    {
       var c = functemp.fertocel(f);
        res.end(c.toString());
    }
    else if(req.url==="/r")
    {
        res.write("length = 30cm");
        res.write("breadth = 50cm");
        res.end();
    }
    else if(req.url==="/r/recarea")
    {
        var length=30;
        var breadth=50;
       var a = funcrec.recarea(length,breadth);
        res.end(a.toString());
    }
    else if(req.url==="/r/recper")
    {
        var length=30;
        var breadth=50;
       var p = funcrec.recper(length,breadth);
        res.end(p.toString());
    }
    else
    {
        res.end("404 error..data not found");
    }
}).listen(3002);
console.log("Server listning on port 3002..working");





