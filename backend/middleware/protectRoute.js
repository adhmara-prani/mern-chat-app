import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        // no token found means no user is logged in
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Found!"});
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);

        // if token does not match the user
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(400).json({ error : "User not found"});
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error!" })
    }
};

export default protectRoute;