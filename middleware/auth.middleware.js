const users=[
    {id:1,name:'Thinh',phone:"0987654321",email:'longpeo2208@gmail.com',password:"12345"},
    {id:2,name:'Nam',phone:"1234567890",email:'longdo2208@gmail.com',password:"12345"}
];

module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.userId){
        res.redirect('/auth/login');
        return;
    }

    const user = users.find(id=> user.id === req.cookies.userId)
    
    if(!user){
        res.redirect('/auth/login')
        return;
    }
    next();
}