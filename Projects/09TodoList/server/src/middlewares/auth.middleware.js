import { UserSchema } from "../models/userModel.js";
import { verifyToken } from "../utils/token.js";

export const authenticate = async (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        // console.log("Auth : ", token);
    }

    if (!token) {
        throw new Error("Invalid credentials");
    }

    let decoded_token = await verifyToken(token);
    const user = await UserSchema.findById(decoded_token.payload.id);
    if (!user) {
        throw new Error("User no longer exists");
    }

    req.user = user;
    next();
};
