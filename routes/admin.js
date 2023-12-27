const express = require('express');
const path = require('path')

const adminController = require('../controllers/admin');

const router = express.Router();


router.get('/add_product', adminController.getAddProduct);

router.get('/products',adminController.getProducts);


router.post('/add_product', adminController.postAddProduct);

module.exports = router;