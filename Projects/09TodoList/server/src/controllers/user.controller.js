import { generateToken } from "../utils/token.js";
import { UserSchema } from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error("All fields are required");
        }

        const existingUser = await UserSchema.findOne({
            email: String(email).toLowerCase(),
        });
        if (existingUser) {
            throw new Error("User already existed! Try another Email");
        }

        const user = await UserSchema.create({ name, email, password });

        const userObj = user.toObject();
        delete userObj.password;

        return res.status(201).json({
            message: "User created successfully",
            data: userObj,
        });
    } catch (error) {
        console.log("Internal Server error", error.message);
        return res.status(401).json({
            message: "Interval Server error",
            error: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("All fields are required");
        }

        const user = await UserSchema.findOne({
            email: String(email).toLowerCase(),
        }).select("+password");
        if (!user) {
            throw new Error("User not Found! Try another Email");
        }

        // compare the password
        let isPassword = await user.comparePassword(password);
        if (!isPassword) {
            throw new Error("Password not matched!");
        }

        const token = await generateToken({ id: user._id });

        let userObj = user.toObject();
        delete userObj.password;

        // return cookies
        // res.setCookie("cookie", token, {
        //     maxAge: 12 * 60 * 60 * 1000,
        //     httpOnly: true,
        // });

        return res.status(201).json({
            message: "User Logged In successfully",
            token,
            data: userObj,
        });
    } catch (error) {
        console.log("Internal Server error", error.message);
        return res.status(401).json({
            message: "Interval Server error",
            error: error.message,
        });
    }
};

export const profile = async (req, res) => {
    try {
        return res.status(200).json({
            message: "user profile : ",
            data: req.user,
        });
    } catch (error) {
        console.log("Internal Server error", error.message);
        return res.status(401).json({
            message: "Interval Server error",
            error: error.message,
        });
    }
};
