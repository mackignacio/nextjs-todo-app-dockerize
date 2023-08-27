const express = require("express");
import todoController from "../controllers/todoController"

const router = express.Router();

router.get("/todo", todoController.all);
router.get("/todo/:id",  todoController.view);
router.post("/todo", todoController.create);
router.put("/todo/:id", todoController.update);
router.delete("/todo/:id", todoController.remove);

module.exports = router;