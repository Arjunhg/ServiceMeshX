const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    mediaIds: [
        {
            type: String, 
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});


const Post = mongoose.model("Post", postSchema);

module.exports = Post;