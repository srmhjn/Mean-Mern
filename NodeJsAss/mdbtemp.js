var MongoClient=require('mongodb').MongoClient;
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
       
       
        MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
            if (err) throw err;
            var dbo = db.db("temperature");
            var ins = { Celcius:cel,Farhenite:far};
            dbo.collection("temp").insertOne(ins, function(err) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
              
            });
            res.end("One Inserted!");
          });
});
}}).listen(1000);
console.log("form server listening on port 1000");


