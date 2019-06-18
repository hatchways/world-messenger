// Pull in our required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema to represent a User, defining fields and types as objects of the Schema
const UserSchema = new Schema({
    username: {
        type: String,
        minlength: 4,
        maxlength: 20
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        firstName: { type: String },
        lastName: { type: String },
        image: { type: Buffer },
        contacts: [{ type: Schema.Types.ObjectId, ref: 'contacts'}]
    },
    language: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

// Export the model so we can access it outside of this file
module.exports = User = mongoose.model("users", UserSchema);
