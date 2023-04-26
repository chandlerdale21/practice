//set up the server for express and invokes the express method
const express = require('express');
const app = express()
//allows the use of the mongoose package
const mongoose = require('mongoose')
//imports routes from another file so the server.js file is cleaner, and routes can me modified seperatly
const route = require('./routes/contactRoutes');

//connects to the database and the connection is established when the connectDB() method is invoked
const connectDB = require('./config/database')
//to use the environment varibles things that are meant to be private(api keys, databaseURLs) this is linked and the .env file is added to git ignore file
require('dotenv').config({path :'./config/.env'});

connectDB()

//sets the view engine to ejs which makes it to where you dont need a .ejs after every file name when viewing it 
app.set('view engine', 'ejs')
///through invoking express and the use() method the routes are able to be actually used within the server.js
app.use('/contacts', route)

app.use(express.static('public'))  
 
//what actually connects and pushes the server live
app.listen(process.env.PORT, () => (
    console.log(`Server running on ${process.env.PORT}`)
))  