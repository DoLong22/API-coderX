const mongoose = require('mongoose');
mongoose.connect('mongodb://localhosts/test',{useNewUrlParser:true,useUnifiedTopology: true});

const db = mongoose.connection;

if(db){
    console.log('Connection success')
}else{
    console.log('Connection error')
}

