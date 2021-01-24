require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

//Routes
app.use('/user',require('./routes/userRouter'))




//Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},err=>{
    if(err) throw err
    console.log("Connected to mongodb")
});


// app.use('/', (req, res, next) => {
//     res.json({ msg: "Hello Everyonen!!!" })
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})