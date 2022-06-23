const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();

    res.json(items);
  } catch (error) {
    next(error);
  }
});

// GET 1 item

router.get("/:id", async (req, res) => {
  try{
  res.json(await Item.findByPk(req.params.id))
  }catch (error){
    next(error)
  }
});

// Post
router.post('/',async (req, res) => {
  try{
  await Item.create(req.body)
  res.json('Item created!');
  }catch (error){
        next(error)
  }
});

// Update 
router.put('/:id',async (req, res) => {
  try{
  console.log('From us', req.body, 'this is req.params.id', req.params.id);
  await Item.update(req.body, {
      where: {id: req.params.id}
  });
  res.json('Updated Items!');
}catch (error){
  next(error)
}
});

 //can delete
 router.delete('/:id', async(req,res)=>{
   try{
  await Item.destroy({
      where: {id: req.params.id}
  });
  res.json('Deleted!')
}catch (error){
  next(error)
}
})


module.exports = router; 
