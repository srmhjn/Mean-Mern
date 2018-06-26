//using a databse
use BankManagement
--------------------------------------------------------------------------------------------------------------------
//creating collection
db.createCollection("bankdata")  
-----------------------------------------------------------------------------------------------------------------------------
//Inserting Entries
//sample records:
//1.
db.bankdata.insert({
    _id : "a14",
    accountNo : "1014",
    balance : 15000,
    customerDetails:{
        customerId : "c14",
        customerName : "Bharat Omar",
        street : "rockHills",
        city : "Hyderabad",
        loanAmount : 10000,
        depositAmount : 2000
    },
    branchDetails : {
        "branchName" : "Popular Market",
        "branchCity" : "Hyderabad",
        "assets" : 10000000.0
    }
})
//2.
db.bankdata.insert({
    _id : "a15",
    accountNo : "1015",
    balance : 5200,
    customerDetails:{
        customerId : "c15",
        customerName : "Ravi Arora",
        street : "Shyamla",
        city : "chennai",
        loanAmount : 0,
        depositAmount : 0
    },
    branchDetails : {
        "branchName" : "Raapuram",
        "branchCity" : "Chennai",
        "assets" : 8000000.0
    }
})
-----------------------------------------------------------------------------------------------------
//fetching Records    
db.bankdata.find()
------------------------------------------------------------------------------------------------- 
//Creating accountNo as Index and unique Key
db.bankdata.ensureIndex({accountNo:1},{unique:true})
--------------------------------------------------------------------------------------------------
//Display Names and Cities of all the Borrowers
db.bankdata.find({"customerDetails.loanAmount":{$gt:0}},
                 {"customerDetails.customerName":1,"customerDetails.city":1,_id:0})
-----------------------------------------------------------------------------------------------------
//The names of borrowers who live in Chennai
db.bankdata.find({"customerDetails.loanAmount":{$gt:0},"customerDetails.city":"Chennai"},
                 {"customerDetails.customerName":1})
----------------------------------------------------------------------------------------------------------
//Find the name, city, and assets of the branch with the largest assets
                       
db.bankdata.find({},{"branchDetails.branchName":1,
                     "branchDetails.branchCity":1,
                     "branchDetails.assets":1})
           .sort({"branchDetails.assets":-1})
           .limit(1)                        
                                              
------------------------------------------------------------------------------------------------        
//The names and cities of customers who have a loan at Pune branch.  
db.bankdata.find({"customerDetails.loanAmount":{$gt:0},
                  "branchDetails.branchCity":"Pune"},
                 {"customerDetails.customerName":1,
                  "customerDetails.city":1}) 
------------------------------------------------------------------------------------------------
//Find the number of accounts with balances between 700 and 900.
db.bankdata.aggregate([{$match:{balance:{$gt:700,$lt:900}}},{$count:"Account_No"}])           
---------------------------------------------------------------------------------------------
//The names of customers with both deposits and loans at Pune branch.
db.bankdata.find({"customerDetails.loanAmount":{$gt:0},
                  "customerDetails.depositAmount":{$gt:0},
                  "branchDetails.branchCity":"Pune"},
                  {"customerDetails.customerName":1})
----------------------------------------------------------------------------------------------                 
//The customers whose total loans are greater than the total amount in their bank accounts

db.bankdata.find({ $where: "this.customerDetails.loanAmount > this.balance"},
                  {"customerDetails.customerName":1,accountNo:1,
                   "customerDetails.loanAmount":1,balance:1})
------------------------------------------------------------------------------------------------                                              
//The names of customers living on streets with names ending in "Hill".
db.bankdata.find({"customerDetails.street":{$regex:"Hills$"}},
                 {"customerDetails.customerName":1}) 
---------------------------------------------------------------------------------------------   
//The names of customers with an account but not a loan at Pune branch                  
db.bankdata.find({"branchDetails.branchCity":"Pune","customerDetails.loanAmount":0},
                 {"customerDetails.customerName":1,accountNo:1}) 
-----------------------------------------------------------------------------------------------                
//The branch with the largest average balance
db.bankdata.aggregate([{
 $group :{ _id :"$branchDetails.branchName",AvgBalance:{$avg:"$balance"}}}
 ,{$sort:{"AvgBalance":-1}},{$limit:1}]) 

--------------------------------------------------------------------------------------------------------====---------
//The branch name and number of customers for each branch 
db.bankdata.aggregate([{$group:{_id:"$branchDetails.branchName",totalCustomers:{$sum:1}}}]) 
  
-----------------------------------------------------------------------------------------------------------------------------------------
//Deposit an additional Rs. 20,000 to Ram’s bank account. 
 
db.bankdata.update({"customerDetails.customerName":"Ram Sharma"},{$inc:{balance:20000}})

----------------------------------------------------------------------------------------------------------------------------                                   
------------------------------------------********------------------------------------------------------------------------------------------                    
     
     
     
                  
                 
