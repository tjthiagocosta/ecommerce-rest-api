require('dotenv').config()
const express = require('express')

const app = express()

const connectDB = require('./db/connect')

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
