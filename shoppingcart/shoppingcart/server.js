// ...existing code...
AudioParamMap.post("\add",requestAnimationFrame,res)
// ...existing code...
{
  const express = require("express");
  const cors = require("cors");

  const app = express();
  app.use(cors());
  app.use(express.json());

  // Simple in-memory store
  const items = [];
  app.get("/items", (req, res) => {
    return res.status(200).json(items);
  });
  app.post("/items", (req, res) => {
    const { name, price } = req.body;
    if (!name || typeof price !== "number") {
      return res.status(400).json({ error: "Invalid payload. Require { name, price:number }" });
    }
    const item = { id: (items.length + 1).toString(), name, price };
    items.push(item);
    return res.status(201).json(item);
  });
  app.put("/items/:id", (req, res) => {
    const { id } = req.params;
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) return res.status(404).json({ error: "Item not found" });
    const { name, price } = req.body;
    if (name !== undefined) items[idx].name = name;
    if (price !== undefined) items[idx].price = price;
    return res.status(200).json(items[idx]);
  });
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
  app.delete("/items/:id", (req, res) => {
    const { id } = req.params;
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) return res.status(404).json({ error: "Item not found" });
    const deleted = items.splice(idx, 1);
    return res.status(200).json({ message: "Item deleted", item: deleted[0] });
  });
}
