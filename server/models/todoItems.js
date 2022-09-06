const mongoose = require("mongoose");

const TodoItemSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", TodoItemSchema);
