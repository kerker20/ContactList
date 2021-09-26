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

export const updatePost = async (req, res) => {

    const { id } = req.params;
    const { fullname, email, contact, location } = req.body;

    const updatedPost = { fullname, email, contact, location, _id: id };

    try {
        await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

        res.json(updatedPost);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        await PostMessage.findByIdAndRemove(id);

        res.json({ message: 'Delete post successfully'});
    } catch (error) {
        console.log(error);
    }
}