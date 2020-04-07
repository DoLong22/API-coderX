$(document).ready(function () {
    // const db = require('../db')
    // const products = db.get('products').value();
    // const pagination = Math.floor(products.length/12)+1;
    console.log($('.pagination').children().length)
    for(let i=0;i<5;i++){
        $('.page-item')
            .prev('.page-item')
            .append(`<a class="page-link" href=/products/page?page=${i}>${i++}</a>`)
    }
    if(!$('.pagination:first-child').hasClass('active') &&
        $('.page-item').click(function(){
            console.log(this)
            $('.page-item').addClass('active')
        })){
        console.log('xinchao2')
    }
});

