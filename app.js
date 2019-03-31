const express = require('express')
const app = express()
const stringhash = require('string-hash')
const fs = require('fs')
const nightmare = require('nightmare');
// const Readable = require('stream').Readable
// const convert = require('html-convert')({
//   width       : 600,        // Note: This doesn't appear to work as per the docs
//   height      : 200,
// })
const bodyParser = require('body-parser')
const port = 8080

app.use(express.static('public'))
app.use(bodyParser());

app.post('/make-image', async function (req, res) {
  const html = req.body.html
  const force = req.body.force
  
  // Create a hash off the html
  const hash = stringhash(html)
  const tempHTML = `./tmp/${hash}.html`
  const filename = `${hash}.png`
  const imagepath = `./public/${imageFilename}`

  if (force || !fs.existsSync(imagepath)) {
    nightmare
      .goto(tempHTML)
      .screenshot(imagePath)
      .end()
      .then(() => {
        res.send(imageFilename)        
      })
      .catch(() => console.log('failed'))
  } else {
    res.send(imageFilename)
  }
})

app.get('/ping', (req, res)=> {
  res.send('pong')
})

app.listen(port, function () {
  console.log(`Listening on port: ${port}`)
})
