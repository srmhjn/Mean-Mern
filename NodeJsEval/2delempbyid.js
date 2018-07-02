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
            div{background-color:silver}
            input {
                border: 0;
                outline: 0;
                background: transparent;
                border-bottom: 1px solid black;
              }
            </style>
            </head>
            <body><center>
            <h1>Employee_Data</h1><hr>
            <div><form action="/" method="POST"><br>
            <label>Employee ID:</label><br><br>
            <input type="text" id="eid" name="eid" required/><br><br>
            <b>"Press Submit to Insert Employee Data and Calculate Net Pay"<b><br><br>
            <button>Submit</button>
            </form></div></body></html>`
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
              dbo.collection("empdetails").deleteOne(del, function(err, obj1) {
                if (err)
                {
                    res.write("Database error");
                }
                else 
                {
                res.end(`
            <html>
            <head>
            <style>
            h1{color:navy;font-family:"Impact";}
            div{background-color:silver}
            </style>
            </head>
            <body><center>
            <h1>Employee_Data</h1><hr>
            <div><form action="/" method="POST">
            <label>Employee ID:${eid} Deleted!</label><br>
            </form></div></body></html>`);
            console.log(eid);
                }
                db.close();
            
            });
         });
    });
}}).listen(2000);
console.log("form server listening on port 2000");