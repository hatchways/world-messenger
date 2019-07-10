// Pull in our required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useFindAndModify", false);

// Create a Schema to represent a Contact, defining fields and types as objects of the Schema
const ContactSchema = new Schema(
  {
    requester: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    status: {
      type: Number,
      enums: [
        0, //'add contact',
        1, //'requested',
        2, //'pending',
        3 //'contact connected'
      ],
      required: true
    }
  },
  { timestamps: true }
);

// Export the model so we can access it outside of this file
module.exports = Contact = mongoose.model("contacts", ContactSchema);
