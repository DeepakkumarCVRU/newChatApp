import Conversation from "../model/Conversation.model.js";
import Message from "../model/Message.model.js";

export const sendMessage = async (req, res) => {

    try {
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user._id; // current LoggedIn user



        let conversation = await Conversation.findOne({ participants: { $all: [senderId, reciverId] } });

        if (!conversation) {
            conversation = await Conversation.create(
                {
                    participants: [senderId, reciverId]
                })

            const newMessage = await Message({
                sender: senderId,
                reciever: reciverId,
                message: message
            })

            if (newMessage) {
                await newMessage.save();
                conversation.message.push(newMessage._id);
                await conversation.save();
                res.status(200).json({ message: "Message sent successfully", newMessage });
            }
            // await Promise.all([conversation.save(), newMessage.save()]);
        }

        console.log("conversation",)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }


}