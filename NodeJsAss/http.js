var http=require('http');
var server=http.createServer(function(request,response)
{
    console.log('request starting.....');
    console.log(request.method);
    if(request.url=="/helloo")
    {
        response.write('!!!');
    }
    if(request.url=='/brother')
    {
        response.write('???');
    }
    else
    {
        response.write('goodbye!');
    }
    response.end();
});
server.listen(1002);
console.log('server running at http://127.0.0.1:1002');
