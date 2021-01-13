const express = require('express')
require('./services/passport')

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Running on port 5000 successfully")
})