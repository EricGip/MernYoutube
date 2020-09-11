const express = require("express");
const app = express();
const router = express.Router();

const passport = require("passport");

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.sendStatus(401);
  }
} 



app.get("/good", isLoggedIn, (req, res) => res.send(`welcome ${req.user.email} `));

app.get("/failed", (req, res) => res.send("failed to log in"));

app.get("/logout", (req, res) => {
  // first, destroy the session
  req.session = null;
  // log out from passport
  req.logout()
  // send to goodbye page
  res.redirect("/")
})

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router;
