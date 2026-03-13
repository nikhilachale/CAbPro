const Review = require('../models/Review')

// POST /api/reviews — customer submits review
const createReview = async (req, res) => {
  const { customer_name, rating, comment } = req.body

  try {
    const review = await Review.create({
      customer_name,
      rating: Number(rating),
      comment
    })

    res.status(201).json({
      success: true,
      message: 'Thank you for your review!',
      reviewId: review._id
    })

  } catch (err) {
    console.error('Review error:', err)
    res.status(500).json({
      success: false,
      message: 'Could not submit review. Please try again.'
    })
  }
}

// GET /api/reviews — get all approved reviews for website
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ is_approved: true })
      .sort({ createdAt: -1 })
      .select('customer_name rating comment createdAt')

    const avgRating = reviews.length
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 0

    res.json({
      success: true,
      total: reviews.length,
      average_rating: Number(avgRating),
      reviews
    })

  } catch (err) {
    console.error('Get reviews error:', err)
    res.status(500).json({ success: false, message: 'Could not fetch reviews.' })
  }
}

// GET /api/reviews/all — admin sees all reviews including unapproved
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .sort({ createdAt: -1 })

    res.json({ success: true, total: reviews.length, reviews })

  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch reviews.' })
  }
}

// PATCH /api/reviews/:id/approve — admin approves a review
const approveReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { is_approved: true },
      { new: true }
    )

    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' })
    }

    res.json({ success: true, message: 'Review approved!', review })

  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not approve review.' })
  }
}

// DELETE /api/reviews/:id — admin deletes a review
const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Review deleted.' })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not delete review.' })
  }
}

module.exports = {
  createReview,
  getReviews,
  getAllReviews,
  approveReview,
  deleteReview
}