const Booking = require('../models/Booking')
const { sendWhatsApp } = require('./whatsappController')
require('dotenv').config()

const createBooking = async (req, res) => {
  const {
    customer_name, phone, pickup,
    drop_location, travel_date,
    travel_time, passengers, car_type
  } = req.body

  try {
    // 1. Save to MongoDB
    const booking = await Booking.create({
      customer_name, phone, pickup,
      drop_location, travel_date,
      travel_time, passengers, car_type
    })

    const bookingId = booking._id.toString()
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    })

    // 2. Send confirmation to customer
    await sendWhatsApp(
      `91${phone}`,
      'booking_confirmation',
      [customer_name, pickup, drop_location,
       travel_date, travel_time, process.env.OWNER_WHATSAPP]
    )

    // 3. Send alert to admin
    await sendWhatsApp(
      process.env.OWNER_WHATSAPP,
      'new_booking',
      [customer_name, phone, pickup, drop_location,
       travel_date, travel_time, passengers, car_type, timestamp]
    )

    res.status(201).json({
      success: true,
      message: 'Booking confirmed!',
      bookingId
    })

  } catch (err) {
    console.error('Booking error:', err)
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    })
  }
}

const completeBooking = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId)
    if (!booking) return false

    booking.status = 'completed'
    await booking.save()

    await sendWhatsApp(
      `91${booking.phone}`,
      'ride_completed',
      [booking.customer_name, booking.pickup,
       booking.drop_location, process.env.GOOGLE_REVIEW_LINK]
    )

    await sendWhatsApp(
      process.env.OWNER_WHATSAPP,
      'admin_trip_done',
      [booking.customer_name, bookingId]
    )

    return true
  } catch (err) {
    console.error('Complete booking error:', err)
    return false
  }
}

const cancelBooking = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId)
    if (!booking) return false

    booking.status = 'cancelled'
    await booking.save()

    await sendWhatsApp(
      `91${booking.phone}`,
      'booking_cancelled',
      [booking.customer_name, booking.pickup,
       booking.drop_location, booking.travel_date,
       booking.travel_time, process.env.OWNER_WHATSAPP]
    )

    return true
  } catch (err) {
    console.error('Cancel booking error:', err)
    return false
  }
}

module.exports = { createBooking, completeBooking, cancelBooking }