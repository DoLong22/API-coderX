const db = require('../db');
const md5 = require('md5');
const shortid = require('shortid');
const users = db.get('users').value();

module.exports.index = function(req,res){
    res.render('users/users',{
        users:users,
        value:''
    })
}

module.exports.search = function(req,res){
    let q = req.query.q;
    let matchedUsers = users.filter((users)=>{
        return users.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    
    res.render('users/users',{
        users:matchedUsers,value:q
    })
}

module.exports.getCreate = function(req,res){
    res.render('users/create');
}

module.exports.postCreate = function(req,res){ 
    req.body.password = md5(req.body.password)
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('/')
    db.get('users')
        .push(req.body)
        .write()  
    res.redirect('/users')
}
module.exports.view = function(req,res){
    const id = req.params.id;
    const user = db.get('users').find({id: id}).value();
    res.render('users/view',{
        user:user
    });
}