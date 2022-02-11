const express = require('express');
const nasaRouter = require('./routes/nasaRoutes');

const app = express();
//MIDLEWARES
app.use(express.static('public')); //Server statics files, will be use to send client an html files to input data
app.use(express.json()); //Body parser

app.use('/api/v1/nasa', nasaRouter)
app.use('/', (req, res) => {
    res.sendFile('./public/getImage.html', { root: __dirname })
})

module.exports = app;
