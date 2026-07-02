const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models/Todo");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/tododb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/submittodoitem", async (req, res) => {
  const { itemName, itemDescription } = req.body;

  try {
    const newTodo = new Todo({
      itemName,
      itemDescription
    });

    await newTodo.save();
    res.json({ message: "To-Do item saved successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error saving data" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
