const app = require("express")();
const http = require("http").Server(app);
const express = require("express");
const fs = require('fs');
const port = 60000;
const atbash = require("./json/atbash.json")
const kenny = require("./json/kenny.json")
const morse = require("./json/morse.json")
const rot = require("./json/rot.json")
const emoji = require("./json/emoji.json")
const fetch = require('node-fetch');
const { letterTrans } = require(`custom-translate`)

app.use(express.json())

app.get('/', (req, res) => {
    res.write("<center><h1>CyphererAPI</h1></center>");
    res.end();
});

app.post('/api/crypt', (req, res) => {
    if (!req.body.type || !req.body.type == ['atbash', 'morse', 'rot', 'kenny']) return res.json({ status: 'err' })
    let text = req.body.text.toLowerCase()
    try {
        if (req.body.type == 'atbash') {
            res.json({
                status: 'success',
                type: req.body.type,
                text: letterTrans(text, atbash)
            })
        }

        if (req.body.type == 'morse') {
            res.json({
                status: 'success',
                type: req.body.type,
                text: letterTrans(text, morse)
            })
        }

        if (req.body.type == 'rot') {
            res.json({
                status: 'success',
                type: req.body.type,
                text: letterTrans(text, rot)
            })
        }

        if (req.body.type == 'kenny') {
            res.json({
                status: 'success',
                type: req.body.type,
                text: letterTrans(text, kenny)
            })
        }

        if (req.body.type == 'emoji') {
            res.json({
                status: 'success',
                type: req.body.type,
                text: letterTrans(text, emoji)
            })
        }
    } catch {
        res.json({ status: 'err' })
    }
})

http.listen(port, function () {
    console.log(`Listening on: http://localhost:${port}/`);
    fetch('http://localhost:60000/api/crypt', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
body: JSON.stringify({ type: 'emoji', text: "Ciao Come va?" })
})
.then(response => response.json())
.then(data => console.log(data));
})