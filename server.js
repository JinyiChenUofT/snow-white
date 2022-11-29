// create an express app
const express = require("express")
const path = require("path")
const fs = require('fs')

const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load files under folder public
app.use(express.static('public'))


// routes
app.get('/',function(req, res){
    res.sendFile("index.html")
})




// start the server listening for requests
let listener = app.listen(process.env.PORT || 3000, 
	() => console.log(`Server is running...${listener.address().port}`))
