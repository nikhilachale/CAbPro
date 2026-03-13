const express = require('express')
const router  = express.Router()
const {
  createReview,
  getReviews,
  getAllReviews,
  approveReview,
  deleteReview
} = require('../controllers/reviewController')
const { validateReview } = require('../middleware/validateReview')

// Public routes
router.post('/',   validateReview, createReview)  // submit review
router.get('/',    getReviews)                    // get approved reviews

// Admin routes
router.get('/all',         getAllReviews)          // all reviews
router.patch('/:id/approve', approveReview)        // approve review
router.delete('/:id',      deleteReview)           // delete review

module.exports = router