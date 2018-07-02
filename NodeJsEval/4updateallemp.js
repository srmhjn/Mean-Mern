var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var eid;
var amt;
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
            <div><form action="/" method="POST">
            <label>New Amount</label><br><br>
            <input type="text" id="amt" name="amt" required/><br><br>
            <b>"Press Submit to Update Employee Data"<b><br><br>
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
    amt=obj1.amt;
    eid=obj1.eid;
    console.log(eid);
    
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      if (err) throw err;
      var dbo = db.db("Empdata");
      var amt1=parseFloat(amt);
      var updval={$inc:{basic: amt1 }}
      console.log(amt1);
    dbo.collection("empdetails").update({},updval,{multi:true},function(err,obj1){
        if (err)
        {
            res.write("Database error");
        }
        
        else if (!obj1){
            console.log(" iD not found");
            res.end("Employee ID not found");
        }
        
        else{
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
        <div><form action="/" method="POST">
        <label>BasicPay Updated for All!</label><br><br>
        </form></div></body></html>`);
    }
    db.close();
      });
});
    });
}}).listen(2000);
console.log("form server listening on port 2000");