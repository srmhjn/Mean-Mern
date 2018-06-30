var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/bankdata',function(err,db)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        var resultSet=db.collection('empp').find().sort({salary:1})
        .toArray(function(err,resultSet)
    {
        if(err)throw err;
        console.log(resultSet);
    });
      db.close(); 
}});
