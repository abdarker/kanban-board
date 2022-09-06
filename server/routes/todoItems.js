const router = require("express").Router();

const todoItemModel = require("../models/todoItems");

router.post("/api/task", async (req, res) => {
  try {
    const newTask = new todoItemModel({
      task: req.body.task,
    });
    const saveTask = await newTask.save();
    res.status(200).json("task added successfully");
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/tasks", async (req, res) => {
  try {
    const allTodoItems = await todoItemModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
