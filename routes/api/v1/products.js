const express = require('express');
const router = express.Router();
//import file of create action from controller
const productApi = require('../../../controllers/api/v1/product_api');

//to create the product
router.post('/create' , productApi.create);
//get list of products
router.get('/', productApi.list);
//to delete product from the list of products
router.delete('/:id',productApi.delete);

module.exports = router;