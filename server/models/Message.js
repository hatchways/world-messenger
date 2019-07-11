// Pull in our required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema to represent a Message, defining fields and types as objects of the Schema
const MessageSchema = new Schema({
        conversationId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        translated: {}
    },
    {
        timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    });

module.exports = Message = mongoose.model('messages', MessageSchema);
