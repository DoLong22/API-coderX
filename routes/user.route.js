const express = require('express');
const router = express.Router();
// const Users = require('../data/contactModel');
const Controller = require('../controller/user.controller')


router.get('/',Controller.index)

router.get('/search',Controller.search)

router.get('/create',Controller.getCreate)
router.post('/create',Controller.postCreate)

module.exports = router;