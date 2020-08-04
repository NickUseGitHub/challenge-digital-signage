import express, { Response } from 'express'

const app = express()
const port = 3000

app.get("/", function home(_, res: Response) {
  res.send("Hello world")
})

app.listen(port, function(err) {
  if (err) {
    console.error('Something went wrong with app')
    return
  }

  console.log(`App listen on port ${port}`)
})