const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    res.status(200).json({msg:'get all products'})
}

const getAllProducts = async (req,res) => {
    res.status(200).json({msg:'get all products'})
}
const createProduct = async (req,res) => {
    const create = await Product.create(req.body)
    res.status(200).json({create})
}
module.exports= {getAllProductsStatic, getAllProducts, createProduct}