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
            <input type="text" id="eid" name="eid" required><br><br>
            <label>Employee Name</label><br><br>
            <input type="text" id="ename" name="ename"><br><br>
            <label>Basic Pay</label><br><br>
            <input type="text" id="basic" name="basic"}><br><br>
            <label>Net pay</label><br><br>
            <input type="text" id="net" name="net"><br><br><br>
            <b>"Press Submit to Insert Employee Data and Calculate Net Pay"<b><br>
            <button>Submit</button><br><br>
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
    
     var eid=obj1.eid;
    console.log(eid);
    
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      if (err) throw err;
      var dbo = db.db("Empdata");
      var findCriteria={"_id":eid};
      console.log(eid);
      dbo.collection("empdetails").findOne(findCriteria,function(err, doc){
        if (err)
        {
            res.write("Database error");
        }
        
        else if (!doc){
            console.log("not found");
            res.write(`<html>
            <head>
            <style>
            h1{color:navy;font-family:"Impact";}
            div{background-color:silver}
            </style>
            </head>
            <body><center>
            <h1>Employee_Data</h1><hr>
            <div><form action="/" method="POST">
            <label>Employee ID:${eid} Not Found</label><br>
            </form></div></body></html>`);
        }
        else
        {
        res.end(`
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
    <input type="text" id="eid" name="eid" value=${eid}><br><br>
    <label>Employee Name</label><br><br>
    <input type="text" id="ename" name="ename" value=${doc.ename}><br><br>
    <label>Basic Pay</label><br><br>
    <input type="text" id="basic" name="basic" value=${doc.basic}><br><br>
    <label>Net pay</label><br><br>
    <input type="text" id="net" name="net" value=${doc.net}><br><br><br>
    <b>"Press Submit to Insert Employee Data and Calculate Net Pay"<b><br>
    <button>Submit</button><br><br>
    </form></div></body></html>`);
    console.log(doc);}
    db.close();
      });
});
    });
}}).listen(2000);
console.log("form server listening on port 2000");