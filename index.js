require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res)=>{
res.send('<h1>hi</h1>')
})
app.get('/port', (req,res)=>{
    res.send(`<div>port is ${process.env.PORT}</div>`)
})
app.listen(PORT, ()=>{
    console.log(`<div>listening on ${PORT}</div>`)
})
function cohortRox() {//eslint-disable-line
    console.log(process.argv[2]);
    console.log(process.argv.slice(2))
}
//cohortRox()

function cohortRoxEnv() {
    console.log(`testing, ${process.env.PICKLE_RICK}`)
    console.log(`home folder is ${process.env.HOME}`)
}
cohortRoxEnv()
//terminal> node
//terminal> node index.js one two three
//terminal> PICKLE_RICK='sandra dee' node index.js one two three