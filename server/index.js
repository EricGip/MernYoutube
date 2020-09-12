const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config/key");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const cookieSession = require("cookie-session")
require("./passport/googlePassportSetup")

const mongoose = require("mongoose");
const connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(cors());

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());

// need to add a timer to cookies and settings up later.
app.use(cookieSession({
  name: "KepClips",
  keys: ["key1", "key2"]
}))

// logged in middleware
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.sendStatus(401);
  }
} 

// passport and its middleware
app.use(passport.initialize());
// since we're using sessions, need another session manager (cookie-sesssion)
app.use(passport.session());



app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes

app.use("/api/video", require('./routes/video'))

//// can't get this to work 
app.use("/auth", require('./routes/googleAuth'))

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/good");
  }
);

app.get("/good", isLoggedIn, (req, res) => res.send(`welcome ${req.user} `));

app.get("/failed", (req, res) => res.send("failed to log in"));

app.get("/logout", (req, res) => {
  // first, destroy the session
  req.session = null;
  // log out from passport
  req.logout()
  // send to goodbye page
  res.redirect("/good")
})

//// 

if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
