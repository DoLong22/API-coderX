const db = require('../db')

module.exports.products = function(req,res){
    const page = req.query.page || 1;
    const perPage = 12;
    const start = (page-1)*perPage;
    const end = perPage*page;
    const products = db.get('products').value().slice(start,end);

    res.render('product/product',{
        products: products
    })
}
module.exports.page = function(req,res){
    const page = req.query.page || 1;
    const perPage = 12;
    const start = (page-1)*perPage;
    const end = perPage*page;
    const data = db.get('products').value();
    const products = data.slice(start,end);
    const maxPage = Math.floor(data.length/12)+1;
    if(page==1){
        res.render('product/product',{
            products: products
        })
    }
    if(page<maxPage){
        res.render('product/page',{
            products: products,
            active: page,
            maxPage:maxPage
        })
    }
    res.render('product/lastPage',{
        products: products,
        active: page
    })
}