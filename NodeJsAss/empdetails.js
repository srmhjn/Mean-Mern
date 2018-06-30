var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var funemp=require("./funemp");
var basic;
var eid;
var ename;
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
            <label>Employee Name</label><br>
            <input type="text" id="ename" name="ename" required/><br>
            <label>Basic Pay</label><br>
            <input type="text" id="basic" name="basic" required/><br>
            <label>Net pay</label><br>
            <input type="text" id="net" name="net"><br><br>
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
    basic=parseFloat(obj1.basic);
    eid=obj1.eid;
    ename=obj1.ename;
    funemp.getnet(basic);
   
    res.write(`
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
    <input type="text" id="eid" name="eid" value=${eid}  required /><br>
    <label>Employee Name</label><br>
    <input type="text" id="ename" name="ename" value=${ename} required/><br>
    <label>Basic Pay</label><br>
    <input type="text" id="basic" name="basic" value=${basic} required/><br>
    <label>Net pay</label><br>
    <input type="text" id="net" name="net" value=${net}><br><br>
    <b>"Press Submit to Insert Employee Data and Calculate Net Pay"<b><br>
    <button>Submit</button><br>
    </form></body></html>`);

    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
            if (err) throw err;
            var dbo = db.db("Empdata");
            var ins = {_id:eid,ename:ename,basic:basic,net:net};
            dbo.collection("empdetails").insertOne(ins, function(err) {
              if (err)
              {
              res.write(`ID Cannot be Same!`)
              }
              else{
              res.end("1 row inserted!");
              }
              db.close();
             });
         });
    });
}}).listen(2000);
console.log("form server listening on port 2000");