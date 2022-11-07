// const data="hello";
// const fs=require("fs");
// fs.writeFile('message.txt',data,(err)=>{
//     if (err) throw err;
//     console.log("saved");
// })
// fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// })
// const logger = require ('./logger.js');
// logger.log();



const express=require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
const tjs=require('./public/tasks');
app.use("/api/tasks",tjs);
app.set('views','./');
app.set("view engine","pug");

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });
// app.get("/tasks", function (req, res) {
//     res.send("<h1>List of tasks</h1>");
//   });
// app.get("/tasks/:ID/second/:id2", function (req, res) {
//     res.send('tasks'+req.params.ID+'second'+req.params.id2);
//   });
const db=require('./db');

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  db.connectdb();
});





// const util=require('util');
// const fs=require('fs');
// const readpro=util.promisify(fs.readFile);
// const wpro=util.promisify(fs.writeFile);

// wpro("ms.txt","hi")
//   .then(()=>{
//     return readpro("ms.txt",{encoding:'utf-8'})
//   })
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

// async function textrd(){
//   try{
//     wpro("ms3.txt","hi");
//     const data=await readpro("ms3.txt",{encoding:'utf-8'});
//     console.log(data);
//   }catch(err){
//     console.log(err);
//   }
// }
// textrd()




const axios=require("axios");

// app.get('/task',function(req,res){
//   axios
//     .get('https://jsonplaceholder.typicode.com/todos/')
//     .then(function (response) {
//       res.status(response.status).json(response.data);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
// })
// tjs.get("/tasks/:ID", async function (req, res){
//   try{
//     const rp=await axios.get("https://jsonplaceholder.typicode.com/todos/"+req.params.ID);
//     res.render('t',{id:rp.data.title});
//     //res.status(rp.status).json(rp.data);
//   }catch(err){
//     console.log(err);
//   }
// });



//db.addtodb({name:'one'});
