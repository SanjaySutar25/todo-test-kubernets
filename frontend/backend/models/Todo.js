const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Todo", todoSchema);
