import PostMessage from "../model/postMessages.js";

export const getPosts = async (req, res) => {

    try {
        const data = await PostMessage.find();

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const createPost = async (req, res) => {
    const data = req.body;

    const newPost = new PostMessage(data);
    try {

        await newPost.save();

        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json(error);
    }
    
} 