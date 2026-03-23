const express = require('express')
const app = express()
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const noteRoutes = require('./routes/noteRoutes')

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use('/api', authRoutes)
app.use('/api' , noteRoutes)

module.exports = app