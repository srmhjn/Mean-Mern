function celtofer(c)
{
 
    f = (9/5) * (36.5 + 32);
    return f;
}

function fertocel(f)
{
 
    c = (5/9) * (94.2 - 32);
    return c;
}

module.exports.celtofer=celtofer;
module.exports.fertocel=fertocel;