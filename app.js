const axios = require('axios');
const express = require('express')
const fetch = require('node-fetch')
require('dotenv').config();
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

// set template engine
app.use(cors())
app.set( "view engine", "ejs")
app.use(express.static( "public" ))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/', (req, res) => {
  res.render('index')
})

app.post('/test', (req, res) => {
  const data = req.body.value
  
  const options = {
    method: 'GET',
    url: 'https://youtube-mp36.p.rapidapi.com/dl',
    params: {id: data},
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host':  process.env.API_HOST
    }
  };
  
  axios.request(options)
    .then((response) => {
    console.log(response.data);
    res.send(response.data)
  }).catch((error) => {
    console.error(error);
  });


})

app.post('/te', (req, res) => {
  const data = req.body.value
  console.log(data)
  res.send(req.body)
  res.end()
})


app.listen(port, () => console.log(`Example app listening on  http://localhost:${port}`))