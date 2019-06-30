// Pull in our required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema to defines how chat messages will be stored in MongoDB
const ConversationSchema = new Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('conversations', ConversationSchema);