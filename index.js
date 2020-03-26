const express = require('express');
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')
const app = express();

const POST =process.env.POST || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine','pug');
app.set('views','./view')
app.get('/',(req,res)=>{
    res.render('index',{
        name:'AAA'
    })
})
app.use(express.static('public'))
app.use('/users',userRoute);

app.listen(POST,()=>console.log(`Listening on post ${POST}`));