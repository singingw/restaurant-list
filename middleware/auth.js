module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/users/login')
    req.flash('warning_msg', '請先登入才能使用！')
  }
}