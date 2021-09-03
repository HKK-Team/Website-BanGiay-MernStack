require('dotenv').config({ path: '.env' });
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})

//app.use('/', require('./src/user/routers/homeRouter'))
app.use('/api', require('./src/user/routers/menuRouter'))
app.use('/api', require('./src/user/routers/bannerRouter'))
app.use('/api', require('./src/user/routers/productRouter'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})