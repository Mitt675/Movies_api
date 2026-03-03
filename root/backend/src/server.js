const express = require('express')
const cors = require('cors')
require('dotenv').config()
const movieRoutes = require('./routes/movieroute')
const PORT = 5004

const app = express()

app.use(cors())
app.use(express.json())
app.use('/movie', movieRoutes)

app.get('/health', (req, res) => {
  res.send('server is running')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})