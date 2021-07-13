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

// Trip POST Endpoint
app.post('/trip', (req, res) => {
  const name = req.body.name
  trips.insertOne({ name: name }, (err, result) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ ok: true })
  })
})

// Trip GET Endpoint
app.get('/trips', (req, res) => {
  /* */
})
// Expense POST Endpoint
app.post('/expense', (req, res) => {
  /* */
})
// Expense GET Endpoint
app.get('/expenses', (req, res) => {
  /* */
})

// Init Server
app.listen(3000, () => console.log('Server ready'))
