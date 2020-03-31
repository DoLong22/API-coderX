const express = require('express');
const router = express.Router();
// const Users = require('../data/contactModel');
const Controller = require('../controller/user.controller')
const validate = require('../validate/user.validate')

router.get('/',Controller.index)
router.get('/cookie',function(req,res,next){
    // res.cookie('user-id',12345);
    res.send("Hello");
})
router.get('/search',Controller.search)

router.get('/create',Controller.getCreate)
router.post('/create', validate.postCreate, Controller.postCreate)

module.exports = router;