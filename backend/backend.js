
const express = require('express')
const app = express()
app.get('/Research', (req, res)=>{
    res.send('Reserch page')
})
app.listen(9000)