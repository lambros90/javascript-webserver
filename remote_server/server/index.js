const express = require('express')
const app = express()
const port = 3001
const path = require('path');
const bodyParser = require('body-parser')
const ip = require('ip')

console.log(ip.address())

app.use(bodyParser.json())

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + '/../frontend/index.html'));
});

app.get('/getip', function(req, res){
	res.send({"ip":ip.address()})
})

app.listen(port, () => console.log(`Port ${port}!`))