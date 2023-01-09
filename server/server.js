const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const appRouter = require('./routes/appRouter')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.listen(PORT, () => {
  console.log(`🏠 Discovery House Express server listening on port ${PORT}`)
})

app.use('/api', appRouter)
app.get('/', (req, res) => {
  res.send('Discovery House server is live.')
})
