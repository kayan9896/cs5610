var express = require('express');
var router = express.Router();
const { addtodb,readdb,getone,deletedb,updatedb } = require("../db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const dt=await readdb();
    res.render('index',{results:dt})
  }catch(e){
    console.log(e);
  }
});
router.get('/:cuisineId', async function(req, res, next) {
  try{
    const dt=await getone(req.params.cuisineId);
    //console.log(dt);
    res.render('showone',{info:dt});
    
  }catch(e){
    console.log(e);
  }
  
});
router.get('/delete/:cuisineId',async function(req,res){
  try{
    await deletedb(req.params.cuisineId);
    res.redirect('/');
  }catch(e){
    console.log(e)
  }
})
router.get('/update/:cuisineId',async function(req,res){
  try{
    const dt=await getone(req.params.cuisineId);
    //console.log(dt);
    res.render('update',{info:dt});
  }catch(e){
    console.log(e)
  }
})
router.post('/update/:cuisineId',async function(req,res){
  try{
    console.log(req.body)
    console.log(req.body[0])
    await updatedb(req.params.cuisineId,req.body);
    res.redirect('/'+`${req.params.cuisineId}`);}
  catch(e){
    console.log(e);
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
