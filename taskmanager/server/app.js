const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Replace with your actual database credentials
const db = require("./db"); // Create a separate file to manage your database connection
const { Navigate } = require("react-router-dom");

// Initialize session middleware
app.use(
  session({ secret: "your-secret-key", resave: false, saveUninitialized: true })
);

// Initialize Passport and session management
app.use(passport.initialize());
app.use(passport.session());

// Replace with your Google OAuth credentials
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "648369435906-6ntpjmo6q4ii0qassgjjv18ftct06bqb.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {},

    async (accessToken, refreshToken, profile, done) => {
      // Check if the user exists in your database by their Google email
      const [user] = await pool.query(
        "SELECT * FROM users WHERE google_email = ?",
        [profile.emails[0].value]
      );

      if (!user) {
        // If the user doesn't exist, create a new user record and assign a default role
        await pool.query(
          "INSERT INTO users (google_email, role_id) VALUES (?, ?)",
          [profile.emails[0].value, 2]
        );
        user = {
          google_email: profile.emails[0].value,
          role_id: 2,
        };
      }

      return done(null, user);
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Fetch user by ID from your database and pass it to done
});

// Define your routes for Google Auth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/App",
    failureRedirect: "/login", // Customize as needed
  })
);

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Implement your role-based authorization logic in your routes
app.get("/App", (req, res) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    // Show admin dashboard
  } else if (req.isAuthenticated() && req.user.role === "user") {
    // Show user dashboard
  } else {
    navigate("/App");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
