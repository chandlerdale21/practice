const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (req,res)=>{
    res.sendFile(__dirname + '/main.js')
})
rappers = {
    '21 savage' : {
 'age' : 29,
 'location' : 'UK',
      },
      'eminem' : {
        'age' : 47,
         'location' : 'LA'
      },
      'unknow' : {
         'age' : 'unknown',
         'location': 'unkown',
     }} 
       
 app.get('/api/:rapperName' , (req, res) => {
  const rappersName = req.params.rapperName 
 if(rappers[rappersName]) {
 res.json(rappers[rappersName])
  }
 else {
        res.json(rappers['unknow'])
   } 
})   



app.listen(3000, ()=> {
    console.log('server is running on port 3000')
})