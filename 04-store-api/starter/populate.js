require('dotenv').config()

const ConnectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json')

const start = async () => {
    try{
        await ConnectDB(process.env.DBURL)
        await Product.create(jsonProducts)
        console.log('success')
    }catch(error) {
        console.error(error)
    }
}
  
start() 