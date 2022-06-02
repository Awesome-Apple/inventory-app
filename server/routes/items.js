const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();

    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET 1 item

router.get("/:id", async (req, res) => {
  res.json(await Item.findByPk(req.params.id))
});

// Post
router.post('/:id',async (req, res) => {
  await Item.create(req.body, {
      where: {id: req.params.id}
  });
  res.send('Item created!');
});



// Update 
router.put('/:id',async (req, res) => {
  console.log('From us', req.body, 'this is req.params.id', req.params.id);
  await Item.update(req.body, {
      where: {id: req.params.id}
  });
  res.send('Updated Items!');
});

 //can delete
 router.delete('/:id', async(req,res)=>{
  await Item.destroy({
      where: {id: req.params.id}
  });
  res.send('Deleted!')
})


module.exports = router;
