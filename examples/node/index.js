var fetch = require("../../index.js")

fetch('https://reqres.in/api/users')
    .then(res => res.text())
    .then(body => console.log(body))


fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(body => console.log(body))
