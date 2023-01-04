const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`🏠 Discovery House Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Discovery House server is live.')
})
