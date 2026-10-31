import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from "../controllers/todos.controller.js";
import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";

const todoRouter = express.Router();

todoRouter.get("/", authenticate, getTodos);
todoRouter.post("/", authenticate, createTodo);
todoRouter.patch("/:id", authenticate, updateTodo);
todoRouter.delete("/:id", authenticate, deleteTodo);

export default todoRouter;
