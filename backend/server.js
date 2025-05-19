import express from "express";
import dotenv from "dotenv";
import connectToDB from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser()); // to use middleware in between the routes as a middleman in communication between messages and the user authorization

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server is running on ${PORT}`);
});