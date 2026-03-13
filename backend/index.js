const express = require('express')
const cors    = require('cors')
require('dotenv').config()

const connectDB     = require('./config/db')
const bookingRoutes = require('./routes/booking')
const webhookRoutes = require('./routes/webhook')
const reviewRoutes  = require('./routes/review')

const app  = express()
const PORT = process.env.PORT || 8080

app.use(cors({
  origin: ['https://www.thecabbro.com', 'http://localhost:5173']
}))
app.use(express.json())

app.use('/api/booking', bookingRoutes)
app.use('/webhook/whatsapp', webhookRoutes)
app.use('/api/reviews', reviewRoutes)

app.get('/', (req, res) => {
  res.json({ status: 'TheCabBro API running' })
})

const start = async () => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()