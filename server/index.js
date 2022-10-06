const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('dist'))

app.listen(port, () => {
    console.log('app is listening on http://localhost:' + port);
})