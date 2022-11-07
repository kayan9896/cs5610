var express = require('express');
var router = express.Router();
const { addtodb,readdb,getone,deletedb,updatedb } = require("../db");
const { body, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const dt=await readdb();
    res.render('index',{results:dt})
  }catch(e){
    console.log(e);
  }
});
router.get('/i/listall', async function(req, res, next) {
  try{
    const dt=await readdb();
    //console.log(dt);
    res.json(dt);
    
  }catch(e){
    console.log(e);
  }
});
router.get('/i/:cuisineId', async function(req, res, next) {
  try{
    const dt=await getone(req.params.cuisineId);
    //console.log(dt);
    res.render('showone',{info:dt});
    
  }catch(e){
    console.log(e);
  }
});
router.get('/i/delete/:cuisineId',async function(req,res){
  try{
    await deletedb(req.params.cuisineId);
    res.redirect('/');
  }catch(e){
    console.log(e)
  }
})
router.get('/i/update/:cuisineId',async function(req,res){
  try{
    const dt=await getone(req.params.cuisineId);
    //console.log(dt);
    res.render('update',{info:dt});
  }catch(e){
    console.log(e)
  }
})
router.post('/i/update/:cuisineId',
  body('Dish').isLength({ min: 1 }),
  body('Ingredient').isLength({ min: 1 }),
  body('IMGlink').isLength({ min: 1 }),
  body('Comment').isLength({ min: 1 }),
  async function(req,res){
    console.log(req.body.IMGlink);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array() });}
    try{
      //console.log(req.body)
      await updatedb(req.params.cuisineId,req.body);
      res.redirect('/i/'+`${req.params.cuisineId}`);}
    catch(e){
      console.log(e);
    }
})
router.post('/',async function(req,res){
  try{
    //console.log(req.body)
    await addtodb(req.body);
    res.redirect('/');}
  catch(e){
    console.log(e);
  }
})

module.exports = router;
