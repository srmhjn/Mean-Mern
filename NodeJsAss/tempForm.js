const http=require("http");
const qs=require("querystring");
var fartocel=require("./fartocelForm");

var far;
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `<!DOCTYPE html>
            <html>
            <head>
            <style>
            h1{color:navy;font-family:"Impact";}
            input{border-top:3px;}
            </style>
            </head>
            <body>
            <h1>Temperature_Conversion</h1><hr>
            <form action="/" method="POST">
            <label>Farhenite</label>
            <input type="text" id="far" name="far" required/>
            <label>Celcius</label>
            <input type="text" id="cel" name="cel">
            <button>Convert</button>
            </form></body></html>`
             );
    }
    else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(chunk)
    {
        body+=chunk;
        //console.log(body);
    });
    req.on("end",function()
{
    var obj=qs.parse(body);
    //console.log(obj.far);
    far=parseFloat(obj.far);
    fartocel.fartocel(far);
    res.end(`<!DOCTYPE html>
        <html>
        <head>
        <style>
            h1{color:navy;font-family:"Impact";}
            input{border-top:3px;}
            </style>
        </head>
        <body>
        <h1>Temperature_Conversion</h1><hr>
        <form action="/" method="POST" class="form-control">
        <label>Farhenite</label>
        <input type="text" id="far" name="far" value=${far} required>
        <label>Celcius</label>
        <input type="text" id="cel" name="cel" value=${cel} required/>
        <button>Convert</button>
        </form></body></html>`);
});
}}).listen(1000);
console.log("form server listening on port 1000");