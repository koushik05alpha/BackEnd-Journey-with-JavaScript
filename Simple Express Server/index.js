require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("this is home");
});

app.get("/about", (req, res) => {
  res.send("<h1>i'm Koushik Saha</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>call me - 01731054747</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running in this ${PORT}`);
});
