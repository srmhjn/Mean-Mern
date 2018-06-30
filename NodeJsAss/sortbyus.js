var _=require('underscore');
var a=[32,74,58,96,2,4,63,13,35];
var sort =_.sortBy(a,function(num){return Math.acos(num);})
console.log(sort);