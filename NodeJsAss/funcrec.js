 
function recarea(length,breadth)
{
 
    a = length*breadth;
    return a;
}

function recper(length,breadth)
{
 
    p = 2*(length+breadth);
    return p;
}

module.exports.recarea=recarea;
module.exports.recper=recper;