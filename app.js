require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-snaef.mongodb.net/test?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!')
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!')
    console.error(error)
  })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

app.use(express.json())

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body)
  res
    .status(201)
    .json({
      message: 'Your thing created successfully!'
    })
})

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'My first thing',
      description: 'All of the info about my first thing',
      imageUrl: 'http://interserver.oss-us-east-1.aliyuncs.com/images/f6bcbc7232a9e154d8dbfd2ac6444686322.jpg?x-oss-process=image/resize,m_fill,w_690,h_797,limit_0/auto-orient,1/quality,q_90',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'My second thing',
      description: 'All of the info about my second thing',
      imageUrl: 'http://interserver.oss-us-east-1.aliyuncs.com/images/f6bcbc7232a9e154d8dbfd2ac6444686322.jpg?x-oss-process=image/resize,m_fill,w_690,h_797,limit_0/auto-orient,1/quality,q_90',
      price: 2900,
      userId: 'qsomihvqios',
    }
  ]
  res
    .status(200)
    .json(stuff)
})

module.exports = app