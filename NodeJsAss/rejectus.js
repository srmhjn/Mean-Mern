var a=[10,20,150,30,200,80];
var _=require('underscore');
    var results=_.reject(a,function(item){return item<100});
    console.log(results);
    