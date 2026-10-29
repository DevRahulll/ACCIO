import express from "express";

const app = express();

app.use(express.json());

// routes
app.use("/api/users", (req, res) => {
    res.send("<h1>Hello</h1>");
});

export default app;
