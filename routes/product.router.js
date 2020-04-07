const express = require('express')
const router = express.Router();

const Product = require('../controller/product.controller');

router.get('/',Product.products);
router.get('/page',Product.page);

module.exports = router;