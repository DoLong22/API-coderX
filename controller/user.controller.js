const users=[
    {id:1,name:'Thinh',phone:"0987654321"},
    {id:2,name:'Nam',phone:"1234567890"}
];
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
    let errors = [];
    if(!req.body.name){
        errors.push('Name is required.')
    }
    if(!req.body.phone){
        errors.push('Phone is required.')
    }
    if(errors.length){
        res.render('users/create',{
            errors:errors,
            values:req.body
        });
        return;
    }
    users.push(req.body);
    res.redirect('/users')
}