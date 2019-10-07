const express = require('express')
const app = express()
const port = 3010
const path = require('path')
const bodyParser = require('body-parser')
const ip = require('ip');
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors());

app.post('/status', function(req,res){
    console.log(req.body)
    res.send({status:'ok'})
})

app.listen(port, ip.address(), () => console.log(`Port ${port}!, ${ip.address()}`))