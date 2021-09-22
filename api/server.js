require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser');
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
        useTempFiles: true
    }))
    // connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        console.log('Connected to MongoDB')
    }
)
// Routes
app.use('/api', require('./src/user/routers/menuRouter'))
app.use('/api', require('./src/user/routers/bannerRouter'))
app.use('/api', require('./src/user/routers/productRouter'))
app.use('/user', require('./src/user/routers/userRouter'))
app.use('/api', require('./src/user/routers/favoriteRouter'))
app.use('/payment', require('./src/user/routers/paymentRouter'))
app.use('/admin', require('./src/admin/routers/adminRouter'))
app.use('/admin', require('./src/admin/routers/chartAdmin'))
app.use('/admin', require('./src/admin/routers/userRouter'))

// load token for server
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})