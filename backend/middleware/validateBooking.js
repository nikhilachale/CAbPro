const validateBooking = (req, res, next) => {
  const required = [
    'customer_name', 'phone', 'pickup',
    'drop_location', 'travel_date',
    'travel_time', 'passengers', 'car_type'
  ]

  for (const field of required) {
    if (!req.body[field]) {
      return res.status(400).json({
        success: false,
        message: `Missing field: ${field}`
      })
    }
  }

  const phone = String(req.body.phone).trim()
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Phone number must be a valid 10-digit mobile number.'
    })
  }

  const passengers = Number(req.body.passengers)
  if (!Number.isInteger(passengers) || passengers < 1 || passengers > 12) {
    return res.status(400).json({
      success: false,
      message: 'Passengers must be an integer between 1 and 12.'
    })
  }

  req.body.phone = phone
  req.body.passengers = passengers
  req.body.customer_name = String(req.body.customer_name).trim()
  req.body.pickup = String(req.body.pickup).trim()
  req.body.drop_location = String(req.body.drop_location).trim()
  req.body.car_type = String(req.body.car_type).trim()

  next()
}

module.exports = { validateBooking }
