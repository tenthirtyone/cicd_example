const express = require('express')
const app = express();

app.get('/', (req, res) => {
res.send('You found me! Again - dun dun dun')
})

app.listen(4000, () => {
console.log('app listening on port 4000')
})
