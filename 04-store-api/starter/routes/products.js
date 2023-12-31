const express = require('express') 
const router = express.Router()

const {getAllProducts, getAllProductsStatic, createProduct} = require('../controllers/products')

router.get('/', getAllProducts)
router.post('/', createProduct)

module.exports = router