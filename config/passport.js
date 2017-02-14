const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../user')

// Load dotenv
require('dotenv').load()

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, done)
  })

  passport.use(FacebookStrategy({
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECRET,
    callbackURL: process.env.FB_CALLBACK_URL
  }, (accessToken, refreshToken, profile, done) => {
    User.findOrCreate()
  }))
}
