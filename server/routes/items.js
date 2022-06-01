const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    console.log(items)
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET 1 item

router.get("/:id", async (req, res) => {
  res.json(await Item.findByPk(req.params.id))
});


// Update 

router.put('/:id',async (req, res) => {
  await Item.update(req.body, {
      where: {id: req.params.id}
  });
  res.send('Updated rating!');
});


module.exports = router;
