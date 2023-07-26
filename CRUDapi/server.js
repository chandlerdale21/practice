const express = require('express')
const app = express() 
const dotenv = require('dotenv')
dotenv.config()

const users = {
    'chandler': {
        'age': 22,
        'dob': '06/21/2001',
        'state' : 'TN',
    },
    'rachel': {
        'age': 21,
        'dob': '11/26/2001',
        'state' : 'TN',
    },
    'frances': {
        'age': 20,
        'dob': '10/09/2002',
        'state' : 'KY',
    },
    'dale': {
        'age': 25,
        'dob': '06/21/1997',
        'state' : 'CA',
    },
    'unknown': {
        'age': 'unknown',
        'dob': 'unknown',
        'state': 'unknown',
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const name = req.params.name.toLowerCase()
    if(users[name]){
        res.json(users[name])
    } else {
        res.json(users['unknown'])
    }
})

app.listen(process.env.port || 3000 , () => {
    console.log(`server is running on ${process.env.port}`)
})