import express from 'express'
import config from './config/index'
import path from 'path'

const app = express()

app.use(
  express.static(
    path.join(__dirname, config.staticPath)
  )
)


// test
app.get('/hello', (req, res) => {
  console.log(req.ip)
  res.send({str: 'Hello World!'})
})

app.listen(process.env.PORT || config.port, () => {
  console.log(
    'Listening on %d',
    config.port
  )
  console.log(process.env)
})

export default app
