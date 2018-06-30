var _=require('./arearec');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if (err) throw err;
  var dbo = db.db("rectangle");
  var rec = { length:23,breadth:23};
  dbo.collection("rec").insertOne(rec, function(err, rec) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});