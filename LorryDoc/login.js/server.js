if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Dependencies
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// Redirects user to LorryDoc homepage when login is successful
app.get('/', checkAuthenticated, (req, res) => {
  res.redirect('http://localhost:3000')
})

// Renders the login page from 'login.ejs' file
app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

// If login is successful user gets redirected to homepage
// If login is unsuccessful user is redirected back to login page to complete login
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

// Renders registration page from 'register.ejs' file
app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

// Creates a user with the correct 'hashedPassword', Bcrypt generates the
// 'hashedPassword' 10 times via '(req.body.password, 10)' to make it extra secure
app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    // User gets redirected to loginpage if registration passes
    res.redirect('/login')
  } catch {
    // User gets redirected back to register page if registration did NOT pass 
    res.redirect('/register')
  }
})

// User requested logout, redirects user back to loginpage.
app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

// App goes via 'localport:3001'
app.listen(3001)
