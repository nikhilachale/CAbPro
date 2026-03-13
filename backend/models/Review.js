const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  rating:        { type: Number, required: true, min: 1, max: 5 },
  comment:       { type: String, required: true },
  is_approved:   { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)