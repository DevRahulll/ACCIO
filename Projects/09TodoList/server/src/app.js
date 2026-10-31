import express from "express";
import { authRouter } from "./routes/user.route.js";
import todoRouter from "./routes/todo.route.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/users", authRouter);
app.use("/api/todo", todoRouter);

export default app;
