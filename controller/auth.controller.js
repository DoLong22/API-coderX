const db = require('../db');
const md5 = require('md5');
const users = db.get('users').value();

module.exports.login = function(req,res){
    res.render('auth/login')
}
module.exports.postLogin = function(req,res){
    const email = req.body.email;
    const password = md5(req.body.password);
    const user = users.find(user=> user.email === email)
    if(!user){
        res.render('auth/login',{
            errors:['User does not exist'],
            value:req.body
        });
        return;
    }
    if(user.password !== password){
        res.render('auth/login',{
            errors:['Wrong password'],
            value: req.body
        });
        return;
    }
    res.cookie('userId',user.id,{signed:true})
    res.redirect('/users')
}