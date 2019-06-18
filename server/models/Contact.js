// Pull in our required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema to represent a Contact, defining fields and types as objects of the Schema
const ContactSchema = new Schema({
    requester: { type: Schema.Types.ObjectId, ref: 'users'},
    recipient: { type: Schema.Types.ObjectId, ref: 'users'},
    status: {
        type: Number,
        enums: [
            0,    //'add contact',
            1,    //'requested',
            2,    //'pending',
            3,    //'contact connected'
        ]
    }
}, {timestamps: true});

// Export the model so we can access it outside of this file
module.exports = mongoose.model('contacts', ContactSchema);
