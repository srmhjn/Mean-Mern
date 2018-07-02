var getnet=function getnet(basic)
{
if(basic>50000)
{
net=basic+(((40*basic)/100)-1000);
return net;
}
else
{
    net=basic+(((30*basic)/100-1000));
    return net;   
}
}
module.exports.getnet=getnet;