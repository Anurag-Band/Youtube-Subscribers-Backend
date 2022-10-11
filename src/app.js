const express = require("express");
const app = express();

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import route here
const subscriberRoute = require("./routes/subscriberRoute");

//  router middleware
app.use("/", subscriberRoute);

module.exports = app;
