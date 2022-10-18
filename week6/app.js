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
const tjs=require('./public/tasks.js');
app.use(tjs);