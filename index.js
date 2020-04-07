require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./routes/user.router')
const authRouter = require('./routes/auth.router')
const productRouter = require('./routes/product.router')

const authMiddleware = require('./middleware/auth.middleware')

const app = express();
const POST =process.env.POST || 8000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser(process.env.SESSION_SECRET))

app.set('view engine','pug');
app.set('views','./view')
app.get('/',authMiddleware.requireAuth,(req,res)=>{
    res.render('index',{
        name:'AAA'
    })
})
app.use(express.static('public'));
app.use(express.static('styles')); //serves static files but not wok in common.pug
app.use(express.static('js  ')); //serves static files but not wok in common.pug

app.use('/users',authMiddleware.requireAuth,userRouter);
app.use('/auth',authRouter);
app.use('/products',productRouter);
app.listen(POST,()=>console.log(`Listening on post ${POST}`));