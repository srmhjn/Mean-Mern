var fs=require('fs');
var data='';
var readerStream=fs.createReadStream('input.txt');
readerStream.on('data',function(chunck)
{
data+=chunck;
});
readerStream.on('end',function()
{
    console.log(data);
});
readerStream.on('error',function(err)
{
    console.log(err);
});
