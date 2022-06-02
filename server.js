const { db, Item } = require("./server/models/Item");
const app = require("./server/app");

const PORT = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  res.json(await Item.findAll());
})

app.delete("/", async (req, res) => {
  res.send(await Item.destroy());
})


const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
