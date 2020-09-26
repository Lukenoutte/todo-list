var express = require("express");
var router = express.Router();
const ToDoSchema = require("../models/ToDoSchema");

router.get("/", async function (req, res) {
   try{
  const toDosList = await ToDoSchema.find();
  res.json(toDosList);
  
  }catch(err){
    console.log("Cannot get toDos", err);
 
  }

});

router.post("/", async function (req, res) {
  const newToDo = new ToDoSchema({
    description: req.body.description,
  });

  try {
    const savedToDo = await newToDo.save();
    res.json(savedToDo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:toDoId', async function (req, res) {
 
  try{
    const removedToDo = await ToDoSchema.deleteOne({_id: req.params.toDoId});
    res.json(removedToDo);
  }catch(err){
    res.json({ message: err });
  }
});

module.exports = router;
