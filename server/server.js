// Include the required libraries.
// Then, initialize a new ExpressJS application and create a connection to MongoDB
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require("passport");

// Pull in our api routes
const users = require("./routes/api/users");

// DB Config
const db = require("./config/keys").mongoURI;

// Initialize our app
const app = express();

// Apply the bodyParser middleware function
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
// Use the body-parser middleware to parse the request body as JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Set the port for our server to run on and have our app listen on this port
app.listen(port, () => console.log(`Server up and running on port ${port} ! yeeee`));
