var _=require('underscore');
var a=[32,74,58,96,2,4,63,13,35];
var even= _.filter(a,function(num){ return num % 2 == 0; });
console.log(even);
