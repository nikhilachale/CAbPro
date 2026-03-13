const express = require('express')
const router = express.Router()
const { completeBooking, cancelBooking } = require('../controllers/bookingController')
const { sendWhatsApp } = require('../controllers/whatsappController')
require('dotenv').config()

// Verify webhook
router.get('/', (req, res) => {
  const mode      = req.query['hub.mode']
  const token     = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  if (mode === 'subscribe' && token === process.env.WEBHOOK_SECRET) {
    res.status(200).send(challenge)
  } else {
    res.sendStatus(403)
  }
})

// Receive messages
router.post('/', async (req, res) => {
  const message = req.body.entry?.[0]
    ?.changes?.[0]?.value?.messages?.[0]

  if (!message) return res.sendStatus(200)

  const from = message.from
  const text = message.text?.body?.toUpperCase().trim()

  // Only accept from owner
  if (from !== process.env.OWNER_WHATSAPP) {
    return res.sendStatus(200)
  }

  const [command, bookingId] = text.split(' ')

  if (command === 'DONE') {
    const success = await completeBooking(bookingId)
    console.log(`Trip ${bookingId} completed: ${success}`)
  }

  if (command === 'CANCEL') {
    const success = await cancelBooking(bookingId)
    console.log(`Trip ${bookingId} cancelled: ${success}`)
  }

  res.sendStatus(200)
})

module.exports = router