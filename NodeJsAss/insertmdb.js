var MongoClient=require('mongodb').MongoClient;
var recDoc={_id:"l01",length:50,breadth:50}
MongoClient.connect('mongodb://127.0.0.1:27017/lnt',function(err,db)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        db.collection('rec').
        insert(function(err,resultSet)
        {
    
        if(err)throw err;
        console.log("1 record inserted !");
    });
      db.close(); 
}});
