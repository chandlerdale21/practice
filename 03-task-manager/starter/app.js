const express = require('express')
const app = express()
const routes = require('./routes/task')
const port = 3000 
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.json())


//routes 
app.use(express.static('./public'))
app.use('/api/v1/tasks',routes)

 


const start = async() => {
    try { 
        await connectDB(process.env.DB_String)
        console.log('connected to db')
        app.listen(port , () => {
        console.log(`server is running on port ${port}`)
        })
    }catch(error) {
        console.log(error)
    }
}
start()