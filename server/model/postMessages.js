import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    fullname: String,
    email: String,
    contact: String,
    location: String,
    createdAt: {
        type: Date, 
        default: new Date(),
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;