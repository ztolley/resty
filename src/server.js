const express = require('express')
const cors = require('cors')

const {
  addUpdatePlatform,
  deletePlatform,
  getPlatform,
  getPlatforms,
} = require('./platforms')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/platform', (req, res) => {
  console.log('GET platform list')
  res.json(getPlatforms())
})

app.post('/api/platform', (req, res) => {
  console.log('Post platform')
  const platform = req.body
  addUpdatePlatform(platform)
  res.json(platform)
})

app.get('/api/platform/:id', (req, res) => {
  const id = req.params.id
  console.log('GET platform ', id)
  const platform = getPlatform(id)
  res.json(platform)
})

app.delete('/api/platform/:id', (req, res) => {
  const id = req.params.id
  console.log('DELETE platform ', id)
  deletePlatform(id)

  res.json({
    ok: true,
  })
})

const port = process.env.SERVER_PORT || 8080
app.listen(port, () => console.log(`🚀 Resty API listening on port ${port}!`))
