const express = require("express");
const requestURL = require("./services/service.js");
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();
const connectDB = require('./database/database');
const Stations = require('./database/models/station');

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// this should do the same thing as the code above. 
app.use(cors()); 



app.get("/arrivals", (req, res) => {
  /* Console Log Test */
  console.log("Just got pinged!!!");

  /* Creates Request  */
  requestURL("https://www.itsmarta.com/arrivals.aspx", res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

connectDB();
// mongo DB api

app.get('/data/api/get/stations', (req, res) => {
  Stations.find({})
    .then((result) => {
      res.send(result)
    })
      .catch((err) => {
        console.log(err)
      });
})
