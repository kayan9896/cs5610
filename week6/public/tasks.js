const express=require("express");
const router=express.Router();
app.get("/tasks", function (req, res) {
    res.send("<h1>List of tasks</h1>");
  });
app.get("/tasks/:ID/second/:id2", function (req, res) {
    res.send('tasks'+req.params.ID+'second'+req.params.id2);
  });
module.exports=router;