import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateToken.js"

export const signup = async (req, res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;

        if (password != confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match!" });
        }

        const user = await User.findOne({userName});

        if (user) return res.status(400).json({ error: "Username already exists! Try logging in instead!" });

        // hash password here
        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        // finally creating a new user
        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json(
            {
                _id: newUser.id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            }
        );
        }

        else res.status(400).json({ error: "Invalid user data!" });

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error : "Internal Server Error!" })
    }
}

export const login = async (req, res) => {
    try {
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || ""); 
        // if user doesn't exist, we can user ?. || "" to avoid wrong username error

        if (!user || !isPasswordCorrect) return res.status(400).json({ error: "Invalid username or password!" });

        // generate a token since the user is verified
        generateTokenandSetCookie(user._id, res);

        // send the data of the user back to the user (basically what logging in means)
        res.status(200).json(
            {
                _id: user._id,
                fullName: user.fullName,
                userName: user.userName,
                profilePic: user.profilePic
            }
        )

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error : "Internal Server Error!" });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge : 0 });
        res.status(200).json({message : "Logged Out Succesfully!"})
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error : "Internal Server Error!" });
    }
}