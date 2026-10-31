import { TodoSchema } from "../models/todoModel.js";
import { UserSchema } from "../models/userModel.js";

export const createTodo = async (req, res) => {
    try {
        const user = req.user;
        const { task } = req.body;
        if (!user || !task) {
            throw new Error("User or task not found");
        }

        const todo = await TodoSchema.create({ task, userId: user._id });

        return res.status(201).json({
            message: "todo created successful",
            data: todo,
        });
    } catch (error) {
        throw new Error("Internal Server Error");
    }
};

export const getTodos = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            throw new Error("User not Found! Login again");
        }

        const todos = await TodoSchema.find({ userId: user._id });
        if (!todos) {
            throw new Error("No Todos found");
        }

        return res.status(200).json({
            message: "Todos fetched",
            data: todos,
        });
    } catch (error) {
        throw new Error("Internal Server Error");
    }
};

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;
        if (!id || !task) {
            throw new Error("id or task not found!");
        }

        const updatedTodo = await TodoSchema.findByIdAndUpdate(id, { task });

        return res.status(201).json({
            message: "todo updated successful",
            data: updatedTodo,
        });
    } catch (error) {
        throw new Error("Internal Server Error");
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new Error("id or task not found!");
        }

        await TodoSchema.findByIdAndDelete(id);

        return res.status(201).json({
            message: "todo deleted successful",
        });
    } catch (error) {
        throw new Error("Internal Server Error");
    }
};
