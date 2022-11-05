var express = require('express');
var router = express.Router();
const { addtodb,readdb,getone,deletedb } = require("../db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const dt=await readdb();
    res.render('index',{results:dt})
  }catch(e){
    console.log(e);
  }
});
router.get('/:cuisine', async function(req, res, next) {
  try{
    const dt=await getone(req.params.cuisine);
    console.log(dt);
    res.render('showone',{info:dt});
    
  }catch(e){
    console.log(e);
  }
  
});
router.get('/delete/:Dish',async function(req,res){
  try{
    await deletedb(req.params.Dish);
    res.redirect('/');
  }catch(e){
    console.log(e)
  }
})
router.post('/',async function(req,res){
  try{
    console.log(req.body)
    await addtodb(req.body);
    res.redirect('/');}
  catch(e){
    console.log(e);
  }
})

module.exports = router;
