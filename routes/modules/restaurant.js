const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  req.body.userId = req.user._id
  const { name, name_en, category, image, location, phone, google_map, rating, description, userId } = req.body
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => res.redirect('/'))
    .catch(err => console.error(err))
})
module.exports = router