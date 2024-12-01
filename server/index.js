const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static('../../Personal-Portfolio'))
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../index.html'));
});
app.listen(port, () => {
    console.log('app is listening on http://localhost:' + port);
})
