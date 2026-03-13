const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  phone:         { type: String, required: true },
  pickup:        { type: String, required: true },
  drop_location: { type: String, required: true },
  travel_date:   { type: String, required: true },
  travel_time:   { type: String, required: true },
  passengers:    { type: Number, required: true, default: 1 },
  car_type:      { type: String, required: true },
  driver_name:   { type: String, default: null },
  driver_phone:  { type: String, default: null },
  car_number:    { type: String, default: null },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true })

module.exports = mongoose.model('Booking', bookingSchema)