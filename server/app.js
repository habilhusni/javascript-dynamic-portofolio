const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000 || process.env.PORT

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/* APP ROUTES */
app.get('/todo', (req,res)=> {
  res.send([
    {
      task: 'Membaca',
      completed : true
    },
    {
      task: 'Bernyanyi',
      completed: false
    },
    {
      task: 'Belajar',
      completed: false
    }
  ])
})

/* SERVER */
app.listen(port)
console.log('Connected to port'+port)
