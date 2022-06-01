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

module.exports = router;
