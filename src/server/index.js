var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi');
const doetenv = require('dotenv');

doetenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

let projectData = {}

// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.API_KEY,
});


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

app.get('/test', function (req, res) {
    textapi.sentiment({
        text: 'John is a very good football player',
        mode: 'tweet',
    }, function (error, response) {
        if (error === null) {
            const analyzedData = {
                tone: response.polarity,
                subjectivity: response.subjectivity,
            }
            projectData["analyzedData"] = analyzedData;
            console.log(projectData);
            res.send(projectData);
        } else {
            console.log(error);
            alert("Sorry! We cannot process your request at the moment")
        }
    });
})