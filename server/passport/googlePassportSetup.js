const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("../config/oAuth");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
  // user.findById(id, function(err, user) {
    done(null, user);
  // })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      // will prompt user to login from this page
      callbackURL: "http://localhost:5000/google/callback"
    },
    // accesstoken and refreshtoken are used for other google apps
    function(accessToken, refreshToken, profile, done) {
      // usually, we want profile info (mainly profile ID)
      // to check if user is in the db
      // for now, we're passing the entire profile. 
        return done(null, profile);

    }
  )
);
