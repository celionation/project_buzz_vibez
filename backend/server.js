const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/blogs', require('./routes/blogRoutes'))
app.use('/api/trade', require('./routes/tradeRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))