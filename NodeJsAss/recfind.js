var rectangle=require('./arearec');
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017/rectangle",function(err, db) {
  if (err){
      console.log(err)
  }

db.collection('rec').find().toArray(function(err,result)
{
if(err){
    console.log('ffffs')  
}
console.log(result);
for(var i=0;i<result.length;i++)
{
    console.log("area= "+rectangle.calcarea(result[i].length,result[i].breadth))
}
db.close();
})});
