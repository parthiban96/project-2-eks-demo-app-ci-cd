const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World! - This is test release from Github - Actions')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
