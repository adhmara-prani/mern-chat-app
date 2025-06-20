import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 25 * 60 * 60 * 1000,
        httpOnly: true, // xss
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenandSetCookie;