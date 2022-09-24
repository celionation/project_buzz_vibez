const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, "Please provide a title."],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Please provide a description."],
    },
    img: {
        type: String,
        required: [true, "Please provide an image."],
    },
    tags: {
        type: [String],
        default: [],
    },
    views: {
        type: Number,
        default: 0,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);