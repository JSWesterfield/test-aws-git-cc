const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send("<h1>It's working 🤗, from root dir /</h1>")
})

app.get("/test", (req, res) => {
    res.send("<h1>It's working 🤗 from /test</h1>")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))