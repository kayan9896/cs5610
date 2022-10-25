// const data="hello";
// const fs=require("fs");
// fs.writeFile('message.txt',data,(err)=>{
//     if (err) throw err;
//     console.log("saved");
// })
// fs.readFile('message.txt',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// })
// const logger = require ('./logger.js');
// logger.log();
const express=require('express');
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/tasks", function (req, res) {
    res.send("<h1>List of tasks</h1>");
  });
app.get("/tasks/:ID/second/:id2", function (req, res) {
    res.send('tasks'+req.params.ID+'second'+req.params.id2);
  });
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
app.use(express.static('public'));
const tjs=require('./public/tasks');
app.use(tjs);

// //app.set("view engine","pug")
// const pug = require('./t.pug');

// // Compile template.pug, and render a set of data
// console.log(pug.renderFile('t.pug', {
//   name: 'Timothy'
// }));
const util=require('util');
const fs=require('fs');
const readpro=util.promisify(fs,readFileSync);
const wpro=util.promisify(fs,writeFile);

wpro("ms.txt","hi")
  .then(()=>{
    return readpro("ms.txt",{encoding:'utf-8'})
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
// async function textrd(){
//   try{
//     await wpro("ms.txt","hi");
//   }catch(err){
//     console.log(err);
//   }
// }
const axios=require("axios");
//const router = require('./public/tasks');
app.get('/task',function(req,res){
  axios
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then(function (response) {
      res.status(response.status).json(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
})
async function asaxios(){
  try{
    const w=await axios.get("https://jsonplaceholder.typicode.com/todos/");
    res.render('/',response.status).json(response.data);
  }catch(err){
    console.log(err);
  }
}
asaxios();