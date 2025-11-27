import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const currentUserId = req.auth.userId;
        const users = await User.find({clerkId: {$ne: currentUserId}}); // $ne => not equal to
        // In the users list, the current user shouldn't appear as a separate user (chat icon / activity status)
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};