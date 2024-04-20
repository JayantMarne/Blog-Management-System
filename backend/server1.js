const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const userRouter = require('./routes/user.js')
const categoryRouter = require('./routes/category.js')
app.use('/user',userRouter)

app.listen(4000,'0.0.0.0',()=>{
    console.log('Server started on port 4000')
})
