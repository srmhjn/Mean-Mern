var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
//var funemp=require("./funemp");
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
            <input type="text" id="eid" name="eid"  required/><br>
            <label>Employee Name</label><br>
            <input type="text" id="ename" name="ename"><br>
            <label>Basic Pay</label><br>
            <input type="text" id="basic" name="basic"><br>
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
    
     var eid=obj1.eid;
    console.log(eid);
    
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      if (err) throw err;
      var dbo = db.db("Empdata");
      var findCriteria={"_id":eid};
      console.log(eid);
       var doc= dbo.collection("empdetails").findOne(findCriteria,function(err, doc){
        if (err)
        {
            throw err;
        }
        else{
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
    <label>Employee ID:</label><br>
    <input type="text" id="eid" name="eid" value=${eid}><br>
    <label>Employee Name</label><br>
    <input type="text" id="ename" name="ename" value=${doc.ename}><br>
    <label>Basic Pay</label><br>
    <input type="text" id="basic" name="basic" value=${doc.basic}><br>
    <label>Net pay</label><br>
    <input type="text" id="net" name="net" value=${doc.net}><br><br>
    <b>"Press Submit to Insert Employee Data and Calculate Net Pay"<b><br>
    <button>Submit</button><br>
    </form></body></html>`);
    console.log(doc);}
    db.close();
      });
});
    });
}}).listen(2000);
console.log("form server listening on port 2000");