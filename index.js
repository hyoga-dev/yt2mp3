const axios = require("axios");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
var favicon = require("serve-favicon");
const path = require("path");
const ytp = require("youtube-parser");

const app = express();
const port = process.env.PORT || 3000;

// set template engine
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// app.get('/', (req, res) => {
//   res.render('index')
// })

app.post("/api", (req, res) => {
  const data = req.body.value;

  const options = {
    method: "GET",
    url: "https://youtube-mp36.p.rapidapi.com/dl",
    params: { id: data },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.post("/test", (req, res) => {
  const data = req.body.value
  console.log(data)
  // console.log("accessed")
  res.send(req.body)
  res.end()
});

app.listen(port, () =>
  console.log(`Example app listening on  http://localhost:${port}`)
);
