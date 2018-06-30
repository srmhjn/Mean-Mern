var MongoClient=require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/temperature", function(err, db) {
            if (err) throw err;
            //var dbo = db.db("temperature");
            var rec = { Celcius:20,Farhenite:50};
            db.collection("temp").insertOne(rec, function(err, rec) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });