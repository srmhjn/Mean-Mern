var _=require('underscore');
var a=[32,74,58,96,2,4,63,13,35];
var b=_.countBy(a,function(num) {return num>=50 ?'>50':'<50';});
console.log(b);