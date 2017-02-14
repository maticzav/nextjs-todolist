const express = require('express')
const next = require('next')
const passport = require('passport')
const session = require('express-session')

// Load dotenv
require('dotenv').load()

// Next
const app = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development')
})

// Next - Express
app.prepare().then(() => {
  const server = express()

  // Passport
  require('./config/passport')(passport)
  app.use(session({secret: 'shhhhhhhh', resave: false, saveUninitialized: false}))
  app.use(passport.initialize())
  app.use(passport.session())

  // Routes
  require('./lib/routes')(server, passport)

  // Express
  server.listen(process.env.PORT, err => {
    if (err) {
      throw err
    }

    console.log(`Next runing on ${process.env.PORT}`)
  })
}).catch(err => {
  console.log('Error occured while trying to start the server.')
  console.log(err)
})
