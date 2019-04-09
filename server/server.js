const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

// create instance of exress and assign settings
const app = express()
const PORT = 3000
const api = require('./routes/api')

app.use(bodyParser.json())
app.use(cors())
app.use('/api', api)

app.get('/', function(req, res) {
  res.send('Server is running')
})



app.listen(PORT, function() {
  console.log(`Server running on localhost:${PORT}`)
})
