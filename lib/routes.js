module.exports = (server, passport) => {
  server.get('/auth/facebook', passport.authenticate('facebook', {scope: ''}))

  server.get('/auth/facebook/callback', passport.authenticate('facebook', (req, res) => {
    res.sendStatus(200)
  }))

  server.get('/auth/logout', (req, res) => {
    req.logout()
    res.sendStatus(200)
  })
}
