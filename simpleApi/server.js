const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())




app.get('/api', (req,res)=>{
    const name = req.query.student
    res.json({name})
    })

app.listen(3000, ()=> {
    console.log('server is running on port 3000')
})