const express = require("express");
const app = express();
const { people } = require("./data.js");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/about", (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      data: people,
      test: "I kinda know what i am doing",
    });
});
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("POST");
});

console.log("test");

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

// const express = require('express')

// const path = require('path')
// const app = express()
// const { people, products } = require('./data')

// app.get('/' , (req,res) => {
//     res.status(200)
//     res.sendFile(path.resolve(__dirname , './navbar-app/index.html'))
// }
// )

// app.get('/about/:id' , (req ,res) => {
//     // const simpleProducts = products.map((product) => {
//     //     const {id , name , image} = product
//     //     return {id, name , image}
//     // })
//     console.log(req)
//     const {id} = req.params
//     const simpleProducts = products.find((product) => product.id === Number(id))
//     res.setHeader('Content-Type', 'application/json')
//     if(simpleProducts===undefined){
//         res.status(404).send('Product does not exist')
//     }
//     res.status(200).json(simpleProducts)
// })
// const logger = ((req,res,next)=>{
//     const url = req.url
//     const method = req.url
//     const time = new Date().getFullYear()
//     console.log(url,method,time)
//     next()
// })
// app.get('/', logger ,(req,res) => {
//     res.send('home page')
// })

// app.get('/test' , (req ,res) => {
//     res.status(200).send('<h1>this is a test</h1> <a href ="/about">about</a>')
// })

// app.all('*' , (req, res) =>{
//     res.status(404).send('<h1>resource not found</h1')
// })

// app.use(express.static('./public'))

// app.listen(5000, (req, res) => {
//     console.log('the server is running on port 5000')
// })

//** this is using just the inherit modules within node, which is long and drawn and get super messed up with as you can see**/

// const http = require('http')
// const { readFileSync } = require('fs')

// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyes = readFileSync('./navbar-app/styles.css')
// const homeImage= readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req, res) => {
//     const url = req.url
//     if(url === '/home') {
//         res.writeHead(200,{'content-type': 'text/html'})
//         res.write('<h1>home page</h1>')
//         res.end()
//     }
//     else if (url ==='/about'){
//         res.writeHead(200,{'content-type': 'text/html'})
//         res.write(homePage)
//         res.end()
//     }
//     else if (url ==='/styles.css'){
//         res.writeHead(200,{'content-type': 'text/css'})
//         res.write(homeStyes)
//         res.end()
//     }
//     else if (url ==='/logo.svg'){
//         res.writeHead(200,{'content-type': 'image/svg+xml'})
//         res.write(homeImage)
//         res.end()
//     }
//     else if (url ==='/browswer-app.js'){
//         res.writeHead(200,{'content-type': 'text/javascript'})
//         res.write(homeLogic)
//         res.end()
//     }
//     else{
//         res.writeHead(404, {'content-type':'text/html'})
//         res.write('<h1>Unabel to find rescource</h2>')
//     }
// })

// server.listen(5000, () => {
//     console.log('server is running on port 5000'
//     )
// })
