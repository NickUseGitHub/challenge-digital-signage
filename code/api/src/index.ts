import express, { Response } from 'express'

const app = express()
const port = 3001

app.get('/', function home(_, res: Response) {
  res.send('Hello worlddd eoeo')
})

app.listen(port, function (err) {
  if (err) {
    console.error('Something went wrong with app')
    return
  }

  console.log(`App listen on port ${port}`)
})
