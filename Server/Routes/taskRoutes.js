const express = require("express");
const {getTask, postTask, updateTask, deleteTask} = require("../Controller/taskController");

const router = express.Router();

router.get("/",getTask);

router.post("/",postTask);

router.put("/:id",updateTask);

router.delete("/:id",deleteTask);

module.exports = router;