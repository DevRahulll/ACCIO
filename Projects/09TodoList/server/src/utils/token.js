import jwt from "jsonwebtoken";

const generateToken = async (payload) => {
    const token = await jwt.sign({ payload }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN || "1d",
    });
    return token;
};

const verifyToken = async (token) => {
    return await jwt.verify(token, process.env.JWT_SECRET);
};

export { generateToken, verifyToken };
