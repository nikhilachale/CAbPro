const axios = require('axios')
require('dotenv').config()

const sendWhatsApp = async (to, templateName, params) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: to,
        type: 'template',
        template: {
          name: templateName,
          language: { code: 'en' },
          components: [{
            type: 'body',
            parameters: params.map(p => ({
              type: 'text',
              text: String(p)
            }))
          }]
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    )
    console.log(`WhatsApp sent [${templateName}] to ${to}`)
    return response.data
  } catch (err) {
    console.error(`WhatsApp error [${templateName}]:`, err.response?.data || err.message)
  }
}

module.exports = { sendWhatsApp }