const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')

const authMiddleware = require('./middleware/auth.middleware')

const app = express();
const POST =process.env.POST || 3030;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.set('view engine','pug');
app.set('views','./view')
app.get('/',authMiddleware.requireAuth,(req,res)=>{
    res.render('index',{
        name:'AAA'
    })
})
app.use(express.static('public'))
app.use('/users',authMiddleware.requireAuth,userRoute);
app.use('/auth',authRoute);
app.listen(POST,()=>console.log(`Listening on post ${POST}`));