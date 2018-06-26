//----------------------------------Inserting Data---------------------------------------//
db.restaurants.insert
({
    _id:1,
    RestaurantId:"r001",
    Name:"Kwality Foods",
    Address:{
            Street:"Allen Street",
            City:"Mumbai",
            Pincode:100001
            },
    Cuisine:["Indian",
             "Chinese",
             "Italian"
            ],
    District:"Thane",
    Rating:[
            {"Date": new Date("10/06/2018"),Rating:4.5,Scores:10},
            {"Date": new Date("11/05/2018"),Rating:3,Scores:7},
            {"Date": new Date("12/06/2018"),Rating:4,Scores:9},
            {"Date": new Date("14/07/2018"),Rating:3.5,Scores:8}
           ]
})

db.restaurants.insert
({
    _id:2,
    RestaurantId:"r002",
    Name:"Bhopal Foods",
    Address:{
            Street:"St. Cruz",
            City:"Mumbai",
            Pincode:100001
            },
    Cuisine:["Veg",
             "Non-Veg"
            ],
    District:"Navi-Mumbai",
    Rating:[
            {"Date": new Date("11/05/2018"),Rating:4.5,Scores:10},
            {"Date": new Date("10/04/2018"),Rating:3.5,Scores:8},
            {"Date": new Date("11/07/2018"),Rating:4.5,Scores:9},
            {"Date": new Date("14/08/2018"),Rating:3.5,Scores:9}
           ]
})

db.restaurants.insert
({
    _id:3,
    RestaurantId:"r003",
    Name:"Indore Foods",
    Address:{
            Street:"Rajwada",
            City:"Indore",
            Pincode:400004
            },
    Cuisine:["Indian",
             "Chinese",
             "Italian",
             "Veg",
             "Non-Veg"
            ],
    District:"Indore",
    Rating:[
            {"Date": new Date("10/05/2018"),Rating:4.5,Scores:10},
            {"Date": new Date("11/04/2018"),Rating:3,Scores:8},
            {"Date": new Date("12/05/2018"),Rating:4.5,Scores:9},
            {"Date": new Date("14/08/2018"),Rating:3.0,Scores:7}
           ]
})

db.restaurants.insert
({
    _id:4,
    RestaurantId:"r004",
    Name:"Food Adda",
    Address:{
            Street:"Sunday Street",
            City:"Mumbai",
            Pincode:100001
            },
    Cuisine:["Indian",
             "Chinese",
             "Italian"
            ],
    District:"Vile-Parle",
    Rating:[
            {"Date": new Date("05/06/2018"),Rating:4,Scores:9},
            {"Date": new Date("10/07/2018"),Rating:3,Scores:8},
            {"Date": new Date("12/06/2018"),Rating:4,Scores:9},
            {"Date": new Date("20/07/2018"),Rating:3,Scores:7}
           ]
})

db.restaurants.insert
({
    _id:5,
    RestaurantId:"r005",
    Name:"Sangeetha",
    Address:{
            Street:"Porud",
            City:"Chennai",
            Pincode:600089
            },
    Cuisine:["Veg",
             "Non-Veg"
            ],
    District:"Chennai",
    Rating:[
            {"Date": new Date("13/07/2018"),Rating:4.5,Scores:10},
            {"Date": new Date("10/05/2018"),Rating:4,Scores:8},
            {"Date": new Date("05/05/2018"),Rating:4,Scores:9},
            {"Date": new Date("04/06/2018"),Rating:3.5,Scores:8}
           ]
})

db.restaurants.insert
({
    _id:6,
    RestaurantId:"r006",
    Name:"Srimithai",
    Address:{
            Street:"Egmore",
            City:"Chennai",
            Pincode:600089
            },
    Cuisine:["Veg",
             "Non-Veg"
            ],
    District:"Chennai",
    Rating:[
            {"Date": new Date("13/07/2018"),Rating:4.0,Scores:10},
            {"Date": new Date("10/05/2018"),Rating:4,Scores:8},
            {"Date": new Date("05/05/2018"),Rating:4,Scores:8},
            {"Date": new Date("04/06/2018"),Rating:5,Scores:10}
           ]
})

db.restaurants.insert
({
    _id:7,
    RestaurantId:"r007",
    Name:"Karthik",
    Address:{
            Street:"Marina",
            City:"Chennai",
            Pincode:600089
            },
    Cuisine:["Veg"
            ],
    District:"Chennai",
    Rating:[
            {"Date": new Date("10/07/2018"),Rating:4.0,Scores:9},
            {"Date": new Date("10/05/2018"),Rating:3,Scores:8},
            {"Date": new Date("05/05/2018"),Rating:3,Scores:7},
            {"Date": new Date("20/06/2018"),Rating:2,Scores:5}
           ]
})

db.restaurants.insert
({
    _id:8,
    RestaurantId:"r008",
    Name:"Kaveri Foods",
    Address:{
            Street:"Egmore",
            City:"Chennai",
            Pincode:600089
            },
    Cuisine:["Veg",
             "Non-Veg"
            ],
    District:"Chennai",
    Rating:[
            {"Date": new Date("13/07/2018"),Rating:3.5,Scores:8},
            {"Date": new Date("21/05/2018"),Rating:4,Scores:9},
            {"Date": new Date("23/05/2018"),Rating:4.5,Scores:9},
            {"Date": new Date("30/06/2018"),Rating:5,Scores:10}
           ]
})

db.restaurants.insert
({
    _id:9,
    RestaurantId:"r009",
    Name:"Bank Foods",
    Address:{
            Street:"Yashwant",
            City:"Banglore",
            Pincode:600089
            },
    Cuisine:["Veg",
             "Non-Veg",
             "Chinese",
             "Italian"
            ],
    District:"Chennai",
    Rating:[
            {"Date": new Date("01/05/2018"),Rating:4,Scores:8},
            {"Date": new Date("12/05/2018"),Rating:4,Scores:9},
            {"Date": new Date("05/07/2018"),Rating:4,Scores:9},
            {"Date": new Date("27/06/2018"),Rating:5,Scores:10}
           ]
})

db.restaurants.insert
({
    _id:10,
    RestaurantId:"r010",
    Name:"TDS",
    Address:{
            Street:"MP nagar",
            City:"Bhopal",
            Pincode:400003
            },
    Cuisine:["Veg",
             "Non-Veg",
             "Chinese",
             "Italian"
            ],
    District:"Bhopal",
    Rating:[
            {"Date": new Date("07/05/2018"),Rating:4.5,Scores:8},
            {"Date": new Date("13/05/2018"),Rating:3.5,Scores:7},
            {"Date": new Date("04/04/2018"),Rating:4.5,Scores:9},
            {"Date": new Date("02/06/2018"),Rating:5,Scores:10}
           ]
})

db.restaurants.insert
({
    _id:11,
    RestaurantId:"r011",
    Name:"downtown",
    Address:{
            Street:"Anna Nagar",
            City:"Chennai",
            Pincode:600089
            },
    Cuisine:["Veg",
             "Non-Veg",
            ],
    District:"Chennai",
    Rating:[
            {"Date": new Date("17/05/2018"),Rating:4.5,Scores:8},
            {"Date": new Date("23/05/2018"),Rating:3.5,Scores:7},
            {"Date": new Date("24/04/2018"),Rating:5,Scores:10},
            {"Date": new Date("12/06/2018"),Rating:5,Scores:10}
           ]
})
//1. Write a MongoDB query to display all the documents in the collection restaurants.  
db.restaurants.find();
---------------------------------------------------------------------------------------------
//2.Write a MongoDB query to display the fields restaurant_id, name, and cuisine for all 
//  the documentsin the collection restaurant.
db.restaurants.find({},{Name:1,Cuisine:1,RestaurantId:1})
---------------------------------------------------------------------------------------------

//3. Write a MongoDB query to display the fields restaurant_id, name, and cuisine, but 
//   exclude the field _id for all the documents in the collection restaurant. 
db.restaurants.find({},{Name:1,Cuisine:1,RestaurantId:1,_id:0})
----------------------------------------------------------------------------------------------
//4. Write a MongoDB query to display all the restaurant which is in Chennai.
db.restaurants.find({"Address.City":"Chennai"},{_id:0})
-----------------------------------------------------------------------------------------------
//5. Write a MongoDB query to display the first 3 restaurant which is in the district 
//   Chennai.
db.restaurants.find({"Address.City":"Chennai"},{_id:0}).limit(3)
-----------------------------------------------------------------------------------------------
//6.Write a MongoDB query to display the next 3 restaurants after skipping first 3 which
//  are in the Chennai.
db.restaurants.find({"Address.City":"Chennai"},{_id:0}).skip(3).limit(3)
-----------------------------------------------------------------------------------------------
//7. Write a MongoDB query to find the restaurants who achieved a score more than 7
db.restaurants.find({"Rating.Scores":{$gt:7}},{_id:0})
-----------------------------------------------------------------------------------------------
//8. Write a MongoDB query to find the restaurants that achieved a score, more than 
//    7 but less than 9. 
db.restaurants.find({"Rating.Scores":{$gt:7,$lt:9}},{_id:0})
-----------------------------------------------------------------------------------------------
//9.Write a MongoDB query to find the restaurants that do not prepare any cuisine 
//   of “Veg” and their grade score more than 7.
db.restaurants.find({Cuisine:{$nin:["Veg"]}},{$gt:7})
-----------------------------------------------------------------------------------------------