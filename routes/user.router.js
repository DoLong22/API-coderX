const express = require('express');
const multer = require('multer')
const router = express.Router();
const Controller = require('../controller/user.controller')
const validate = require('../middleware/validate/user.validate')

const upload = multer({dest:'./public/uploads/'});
router.get('/',Controller.index)
router.get('/cookie',function(req,res,next){
    res.send("Hello");
})
router.get('/create',Controller.getCreate)
router.post('/create',upload.single('avatar'), validate.postCreate, Controller.postCreate)
// "avatar" là tên field của field chứa file upload
router.get('/search',Controller.search)
router.get('/:id',Controller.view)

module.exports = router;