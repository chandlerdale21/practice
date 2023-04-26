const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res) => {
    console.log(req.url , req.method); 

    if(req.url ==='/'){
        res.setHeader('Content-Type' , 'text/html') 
        fs.readFile('./noExpress.html' , (err,data) => {
          if(err) {
            res.statusCode=500;
            res.end('internal server error')
         } else {
            res.end(data)}})}
    else if(req.url ==='/noExpress.css'){
        res.setHeader('Content-Type' , 'text/css')
        fs.readFile('./noExpress.css', (err,data) => {
            if(err) {
                res.statusCode=500;
                res.end('internal server error')
            }
            else {
                res.end(data)}
            })
        }
    else {
        res.statusCode=404
        res.end('file not found')
    }
    })



server.listen(3000, () => {
    console.log('The server is running on port 3000')
})