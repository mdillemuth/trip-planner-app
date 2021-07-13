const express = require('express')
const mongo = require('mongodb').MongoClient

// Init Express
const app = express()

// API Endpoints
app.post('/trip', (req, res) => {
  /* */
})
app.get('/trips', (req, res) => {
  /* */
})
app.post('/expense', (req, res) => {
  /* */
})
app.get('/expenses', (req, res) => {
  /* */
})

// Init Server
app.listen(3000, () => console.log('Server ready'))
