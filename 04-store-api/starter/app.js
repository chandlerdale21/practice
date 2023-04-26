require('dotenv').config()
const ConnectDB = require('./db/connect')
const express = require('express')
const app = express()
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/not-found')


 
app.use(express.json())

app.get('/' , (req,res) => {
    res.send('<h1>Store API </h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000 

const start = async () => {
    try{
        await ConnectDB(process.env.DBURL)
        console.log('database connected')
        app.listen(port, console.log(`server is listening on port ${port}`))
    }catch(error) {
        console.log(error)
    }
}

start()