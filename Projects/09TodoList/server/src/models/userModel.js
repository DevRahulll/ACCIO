import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minLength: 3,
            maxLength: 50,
            trim: true,
        },
        email: {
            type: String,
            unique: [true, "Email must be unique"],
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minLength: 5,
            select: false,
        },
    },
    { timestamps: true },
);

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
};

export const UserSchema = mongoose.model("User", userSchema);
