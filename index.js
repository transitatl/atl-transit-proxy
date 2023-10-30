const express = require("express");
const requestURL = require("./services/service.js");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  /* Console Log Test */
  console.log("Just got pinged!!!");

  /* Creates Request  */
  requestURL("https://www.itsmarta.com/arrivals.aspx", res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
