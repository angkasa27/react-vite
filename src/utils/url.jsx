import querystring from 'query-string'

export const submitWhatsApp = (phone, text) => {
  let obj = { phone, text }
  let message = querystring.stringify(obj)

  return `https://api.whatsapp.com/send?${message}`
}
