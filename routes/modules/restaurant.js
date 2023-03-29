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
router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  const userId = req.user._id
  // $regex 提供了在查詢 (query) 中找到符合的字串
  // $options: 'i' 代表大小寫皆可
  // $or 代表任一條件符合皆可
  Restaurant.find({
    $and: [{ userId },
      {
        $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { name_en: { $regex: keyword, $options: 'i' } },
          { category: { $regex: keyword, $options: 'i' } }
        ] }]
  })
    .lean()
    .then(restaurants => res.render('index', { restaurants, keyword }))
    .catch(err => console.error(err))
})
module.exports = router