const mongoose = require('mongoose');

const contactModel = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required.']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required.']
    },
    email: {
        type: String,
        required: [true, 'E-Mail is reqiured.']
    },
    message: {
        type: String,
        required: [true, 'Message fields can not be Empty.']
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Contact', contactModel);