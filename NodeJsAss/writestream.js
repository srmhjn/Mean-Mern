var fs=require("fs");
var data='mean mern stack training';
var writeStream=fs.createWriteStream('output.txt');
writeStream.write(data);
writeStream.end();
writeStream.on('finish',function()
{
    console.log('write completed!');
});
writeStream.on('error',function(err)
{
    console.log(err.stack);

});
console.log("program ended");