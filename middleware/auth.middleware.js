const db = require('../db');

const users = db.get('users').value();

module.exports.requireAuth = function(req,res,next){
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    const user = users.find(user=> user.id === req.signedCookies.userId);
    if(!user){
        res.redirect('/auth/login')
        return;
    }
    res.locals.user = user;
    next();
}