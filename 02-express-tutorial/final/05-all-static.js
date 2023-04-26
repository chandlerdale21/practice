const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

/////the use of * is what is used to symbolize every route under the sun that wasn't previously defined and the use of app.all includes all requests whether it be a get or a put if its one of those methods with an undefined route the 'rescource not found' will be sent

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
