var http=require("http");
var data=require("./list");
http.createServer(function(req,res)
{
    if(req.url==="/")
    {
        res.end(JSON.stringify(data));
    }
    else if(req.url==="/inStock")
    {
        listinStock(res);
    }
    else if(req.url==="/onOrder")
    {
        listonOrder(res);
    }
    else if(req.url==="/outStock")
    {
        listoutStock(res);
    }
    else
    {
        res.end("404 error..file not found");
    }
}).listen(3000);
console.log("Server listning on port 3000");




function listinStock(res)
{
    var inStock=data.filter(function(item)
{
    return item.avail==="inStock";
});
res.end(JSON.stringify(inStock));
}
function listoutStock(res)
{
    var outStock=data.filter(function(item)
{
    return item.avail==="outStock";
});
res.end(JSON.stringify(outStock));
}

function listonOrder(res)
{
    var onOrder=data.filter(function(item)
{
    return item.avail==="onOrder";

});
res.end(JSON.stringify(onOrder));
}