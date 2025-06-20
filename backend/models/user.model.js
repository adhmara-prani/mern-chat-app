import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        gender: {
            type: String,
            required: true
        },
        profilePic: {
            type: String,
            default: "",
        }
    }
)

const User = mongoose.model("User", userSchema);

export default User;