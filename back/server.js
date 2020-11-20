const express = require('express')

const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.listen(3000, function () {
  console.log('Servidor Web rodando na porta 3000')
})

app.get('/api', function (req, res) {
  res.json({name: 'Mário Silva'})
})