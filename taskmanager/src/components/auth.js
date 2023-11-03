const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        648369435906 -
        gk6rq1ptfse43hbv2q4lgl90jbr3gv6q.apps.googleusercontent.com,
      clientSecret: GOCSPX - GWfV - _c4XtwQCLPaHuJvNr9br3qH,
      callbackURL: "/auth/google/callback", // This should match your OAuth consent screen settings
    },
    (accessToken, refreshToken, profile, done) => {
      // Use the profile information to find or create a user in your application's database
      // Call done() when you're done
      // Example:
      // User.findOrCreate({ googleId: profile.id }, (err, user) => {
      //   return done(err, user);
      // });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Find the user by ID in your application's database
  // Example:
  // User.findById(id, (err, user) => {
  //   done(err, user);
  // });
});
