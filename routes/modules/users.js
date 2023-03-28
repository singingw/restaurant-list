const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', passport.authenticate('local', {

}))
router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', (req, res) => {

})
router.get('/logout', (req, res) => {

})
module.exports = router