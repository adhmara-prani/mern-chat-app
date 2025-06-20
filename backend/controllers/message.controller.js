import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getRecieverSocketId, io} from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id; // this doesn't exist within the req params so we use a middleware

        let conversation = await Conversation.findOne(
            {
                // finding a conversation common to both recieverId and senderId
                participants: { $all: [senderId, receiverId]}
            }
        )

        // this is the first conversation between the sender and the receiver
        if (!conversation) {
            conversation = await Conversation.create(
                {participants: [senderId, receiverId]}
            )
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //await conversation.save();
        // await newMessage.save(); // takes longer and to optimize it and run it in parallel (look below)

        await Promise.all([conversation.save(), newMessage.save()]);

        // Socket.io functionality
        const recieverSocketId = getRecieverSocketId(receiverId);
        if (recieverSocketId) {
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller", error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id : userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("messages") // populates the senderId with actual messages instead

        if (!conversation) return res.status(200).json([]); 

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error!"});
    }
}