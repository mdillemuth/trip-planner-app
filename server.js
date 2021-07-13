const express = require('express')
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

// Init Express
const app = express()
app.use(express.json())

// Init MongoDB
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db('tripcost')
    trips = db.collection('trips')
    expenses = db.collection('expenses')
  }
)

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
