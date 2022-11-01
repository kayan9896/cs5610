const express=require("express");
const router=express.Router();
const axios=require("axios");
const path = require("path");
const { addtodb } = require("../db");
router.get("/", function (req, res) {
    res.send("<h1>List of tasks</h1>");
  });
router.get("/:ID", function (req, res) {
    //res.send('tasks'+req.params.ID+'second'+req.params.id2);
    axios
    .get('https://jsonplaceholder.typicode.com/todos/'+req.params.ID)
    .then(function (response) {
          res.render('t',{id:response.data.id});

      // res.status(response.status).json(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  });
router.post('/',async function(req,res){
  try{
    console.log(req.body)
    await addtodb(req.body);
    res.redirect('/api/tasks');}
  catch(e){
    console.log(e);
  }
})

router.get('/newt', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'newt.html'));
});
router.get('/',async function(req,res){
})
module.exports=router;