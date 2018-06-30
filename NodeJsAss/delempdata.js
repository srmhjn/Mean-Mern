var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var eid;
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `
            <html>
            <head>
            <style>
            h1{color:navy;font-family:"Impact";}
            </style>
            </head>
            <body><center>
            <h1>Employee_Data</h1><hr>
            <form action="/" method="POST">
            <label>Employee ID:</label><br>
            <input type="text" id="eid" name="eid" required/><br>
            <b>"Press Submit to Insert Employee Data and Calculate Net Pay"<b><br>
            <button>Submit</button>
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
    var obj1=qs.parse(body);
    //console.log(obj.far);
    eid=obj1.eid;
   
    
                
            MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
              if (err) throw err;
              var dbo = db.db("Empdata");
              var del = { _id:eid};
              console.log(eid);
              var obj=dbo.collection("empdetails").deleteOne(del, function(err, obj) {
                if (err)
                {
                    res.write(`ID DoNot Exists!`)
                }
                res.end(`
            <html>
            <head>
            <style>
            h1{color:navy;font-family:"Impact";}
            </style>
            </head>
            <body><center>
            <h1>Employee_Data</h1><hr>
            <form action="/" method="POST">
            <label>Employee ID:${eid} Deleted!</label><br>
            </form></body></html>`);
            console.log(eid);
                db.close();
              });
         });
    });
}}).listen(2000);
console.log("form server listening on port 2000");