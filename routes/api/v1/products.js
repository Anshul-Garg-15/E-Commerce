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

//to update the quantity of product
router.post('/:id/update_quantity/' , productApi.update)

module.exports = router;