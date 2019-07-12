// Include the required libraries.
// Then, initialize a new ExpressJS application and create a connection to MongoDB
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const io = require("socket.io")();
const socketEvents = require("./socketEvents");

//translation
const dotenv = require("dotenv").config();

// Pull in our api routes
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const contacts = require("./routes/api/contacts");
const conversations = require("./routes/api/conversations");

// DB Config
const db = require("./config/keys").mongoURI;
// Passport config
require("./config/passport")(passport);

// Define the URL path where new connections will be made to the Socket.IO server
io.path("/socket.io");

// Initialize our app
const app = express();

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Apply the bodyParser middleware function
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// Use the body-parser middleware to parse the request body as JSON
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());

// Routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/contacts", contacts);
app.use("/api/conversations", conversations);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Set the port for our server to run on and have our app listen on this port
io.attach(
  app.listen(port, () => console.log(`Server up and running on port ${port} !`))
);

socketEvents(io);
