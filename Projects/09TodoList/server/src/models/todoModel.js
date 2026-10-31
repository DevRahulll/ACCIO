import mongoose from "mongoose";

const Todos = new mongoose.Schema(
    {
        task: {
            type: String,
            required: [true, "Task should be there"],
            minLenth: 3,
        },
        isDone: {
            type: Boolean,
            default: false,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true },
);

export const TodoSchema = mongoose.model("Todos", Todos);
