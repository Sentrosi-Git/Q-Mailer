const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) =>{
  User.findById(id)
  .then(user => {
    done(null, user);
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done )=> {
      User.findOne({ googleId: profile.id }) //Promise, not a stored variable
        .then((existingUser) => {
          if (existingUser) {
            //we already have a record with existing ID
            done(null, existingUser);
          } else {
            // we don't have a user record, make a new one
            new User({ googleId: profile.id }) // creates a new instance of user, our googleId takes the profile.id from the oauth
              .save()
              .then(user => done(null, user));
          }
        });
    }
  )
);
