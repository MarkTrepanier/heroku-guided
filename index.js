require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res)=>{
res.send('hi')
})
app.get('/port', (req,res)=>{
    res.send(`port is ${process.env.PORT}`)
})
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})
function cohortRox() {
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