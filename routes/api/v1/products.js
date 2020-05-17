const express = require('express');
const router = express.Router();
//import file of create action from controller
const productApi = require('../../../controllers/api/v1/product_api');

router.post('/create' , productApi.create);


module.exports = router;