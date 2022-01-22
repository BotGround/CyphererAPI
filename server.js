const app = require("express")();
const http = require("http").Server(app);
const express = require("express");
const fs = require('fs');
const port = 60000;
const atbash = require("./json/atbash.json")
const kenny = require("./json/kenny.json")
const morse = require("./json/morse.json")
const rot = require("./json/rot.json")
const fetch = require('node-fetch');
const { letterTrans } = require(`custom-translate`)

app.use(express.json())

app.get('/', (req, res) => {
    res.write();
    res.end();
});

app.post('/api/crypter/atbash', (req, res) => {
    res.status(418).send(JSON.stringify({
        text: letterTrans(req.body.text, atbash)
    }))
})

app.post('/api/crypter/kenny', (req, res) => {
    res.status(418).send(JSON.stringify({
        text: letterTrans(req.body.text, kenny)
    }))
})

app.post('/api/crypter/morse', (req, res) => {
    res.status(418).send(JSON.stringify({
        text: letterTrans(req.body.text, morse)
    }))
})

app.post('/api/crypter/rot', (req, res) => {
    res.status(418).send(JSON.stringify({
        text: letterTrans(req.body.text, rot)
    }))
})


http.listen(port, function () {
    console.log(`Listening on: http://localhost:${port}/`);
    fetch('http://localhost:60000/api/crypter/morse', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
body: JSON.stringify({ text: "morse" })
})
.then(response => response.json())
.then(data => console.log(data));
})