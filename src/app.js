require('dotenv').config()
require('express-async-errors')
const express = require('express')

const app = express()

// database
const connectDB = require('./db/connect')

// midleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
app.use(express.json())

app.get('/', (req, res) => {
  res.send('ecommerce-api')
})

const port = process.env.PORT || 3000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Server is listening at ${port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
