const validateReview = (req, res, next) => {
  const { customer_name, rating, comment } = req.body

  if (!customer_name || !rating || !comment) {
    return res.status(400).json({
      success: false,
      message: 'Name, rating and comment are required.'
    })
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({
      success: false,
      message: 'Rating must be between 1 and 5.'
    })
  }

  if (comment.length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Comment must be at least 10 characters.'
    })
  }

  next()
}

module.exports = { validateReview }