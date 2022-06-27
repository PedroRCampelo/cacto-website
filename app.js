const express = require('express');
const app = express()
const path = require('path');


const PORT = 3001

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/lib', express.static(__dirname + '/public/lib'))

// Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.info(`server iniciado na porta ${PORT}`)
})