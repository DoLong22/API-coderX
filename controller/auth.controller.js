const users=[
    {id:1,name:'Thinh',phone:"0987654321",email:'longpeo2208@gmail.com',password:"12345"},
    {id:2,name:'Nam',phone:"1234567890",email:'longdo2208@gmail.com',password:"12345"}
];

module.exports.login = function(req,res){
    res.render('auth/login')
}
module.exports.postLogin = function(req,res){
    const email = req.body.email;
    const password = req.body.password;

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
    res.cookie('userId',user.id)
    res.redirect('/users')
}