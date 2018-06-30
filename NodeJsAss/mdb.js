var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/sample',function(err,db)
{
    if(err)
    {
       throw err;
    }
    else
    {
        var resultSet=db.collection('movies').find({});
        resultSet.each(function(err,doc)
        {
            console.log(doc);
        });
        
    }  db.close();
});





