const express=require("express");
const router=express.Router();
const axios=require("axios");
router.get("/tasks", function (req, res) {
    res.send("<h1>List of tasks</h1>");
  });
router.get("/tasks/:ID/seconds/:id2", function (req, res) {
    //res.send('tasks'+req.params.ID+'second'+req.params.id2);
    //res.render('t',{id:req.params.ID});
    axios
    .get('https://jsonplaceholder.typicode.com/todos/'+req.params.ID)
    .then(function (response) {
      res.status(response.status).json(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  });
module.exports=router;